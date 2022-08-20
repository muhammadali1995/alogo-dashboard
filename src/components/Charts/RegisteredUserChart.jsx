
import React, { useContext, useState } from 'react';
import {
    Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis,
    YAxis
} from 'recharts';
import { ThemeContext } from "../../context/ThemeContext";
import { chartColorMap } from "../../data/colorMap";
import { TotalRegisteredUsers } from "../../data/data";



export default function TotalRegisteredUsersChart({ header, className }) {
    const { theme } = useContext(ThemeContext)
    const [focusBar, setFocusBar] = useState(null);
    const onMouseMove = (state) => {
        if (state) {
            setFocusBar(state.activeTooltipIndex);
        } else {
            setFocusBar(null);
        }
    }

    const onMouseLeave = () => {
        setFocusBar(null);
    }

    return (
        <div className={className}>
            <div className="flex justify-between">
                <h2 className="text-base font-bold text-dark mb-4 ml-2">{header}</h2>
                <select defaultValue={''} className="text-10 p-2 h-7 bg-white shadow-[0px_0px_8px_rgba(15,40,55,0.05)]" name="months" id="month">
                    <option disabled value=''>Months</option>
                    <option value='1'>January</option>
                    <option value='2'>February</option>
                </select>
            </div>
            <ResponsiveContainer width="100%" height="100%">

                <BarChart
                    height={300}
                    data={TotalRegisteredUsers}
                    margin={{
                        right: 0,
                        left: -20,
                    }}
                    onMouseLeave={onMouseLeave}
                    onMouseMove={onMouseMove}
                >
                    <CartesianGrid horizontal={true} vertical={false} />
                    <XAxis fontSize={10} dataKey="name" axisType='radiusAxis' axisLine={false} tickLine={false} />
                    <YAxis color="#0F2837" domain={[0, 350]} fontSize={10} axisLine={false} tickLine={false} type='number' />
                    <Bar dataKey="count" radius={5} barSize={20}>
                        {TotalRegisteredUsers.map((entry, index) => {
                            const colorKey = `${theme} ${focusBar === index ? 'bg-custom-100' : 'bg-custom-400'}`;
                            return <Cell style={{
                                margin: '2px'
                            }} fill={chartColorMap[colorKey]} key={`cell-${index}`} />
                        })}
                    </Bar>
                    <Tooltip cursor={{ fill: 'transparent' }} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
