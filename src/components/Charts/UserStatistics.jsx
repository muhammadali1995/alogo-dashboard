import React, { useContext, useState } from 'react'
import { Bar, BarChart, CartesianGrid, Cell, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ThemeContext } from "../../context/ThemeContext";
import { chartColorMap } from "../../data/colorMap";
import { UserStatisticsData } from './../../data/data';

export default function UserStatistics({ header, className }) {
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
    const renderCustomizedLabel = (props) => {
        const {
            x, y, width, height, value,
        } = props;

        const fireOffset = value.toString().length < 5;
        const offset = fireOffset ? -20 : 5;
        return (
            <text fontSize={10} x={x + width - offset} y={y + height - 5} fill={"#285A64"} textAnchor="end">
                {value > 1000 ? `${(value) / 1000}K` : value}
            </text>
        );
    };

    return (
        <div className={className}>
            <div className="flex justify-between pt-8">
                <h2 className="text-base font-bold text-dark mb-4 ml-2 ">{header}</h2>
                <select defaultValue={''} className="text-10 p-2 h-7 bg-white shadow-[0px_0px_8px_rgba(15,40,55,0.05)]" name="months" id="month">
                    <option disabled value=''>Months</option>
                    <option value='1'>January</option>
                    <option value='2'>February</option>
                </select>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    layout="vertical"
                    height={300}
                    data={UserStatisticsData}
                    margin={{
                        right: 0,
                        left: -20,
                    }}
                    onMouseLeave={onMouseLeave}
                    onMouseMove={onMouseMove}
                >
                    <CartesianGrid horizontal={true} vertical={false} />
                    <XAxis fontSize={10} dataKey="count" axisType='radiusAxis' hide={true} axisLine={false} tickLine={false} type='number' />
                    <YAxis style={{ color: "#0F2837", fontWeight: 400 }} width={140} fontSize={10} dataKey="name" axisLine={false} tickLine={false} reversed={false} type='category' />
                    <Bar dataKey="count" radius={5} barSize={20}>
                        {UserStatisticsData.map((entry, index) => {
                            const colorKey = `${theme} ${focusBar === index ? 'bg-custom-100' : 'bg-custom-400'}`;
                            return <Cell style={{
                                margin: '2px'
                            }} fill={chartColorMap[colorKey]} key={`cell-${index}`} />
                        })}
                        <LabelList dataKey="count" content={renderCustomizedLabel} position="insideRight" style={{ fill: "#0F2837" }} />
                    </Bar>
                    <Tooltip cursor={{ fill: 'transparent' }} />
                </BarChart>
            </ResponsiveContainer>
        </div>

    );
}
