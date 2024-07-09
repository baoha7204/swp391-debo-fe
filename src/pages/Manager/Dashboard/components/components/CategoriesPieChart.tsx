import { PieChart } from '@mui/x-charts/PieChart';

type CategoriesProp = {
    categoryID: number;
    categoryName: string;
    totalAppointments: number;
}

type CategoriesPieChartProps = {
    Categories: CategoriesProp[];
}

function CategoriesPieChart({ Categories }: CategoriesPieChartProps) {
    const PieData = Categories.map((category) => ({
        value: category.totalAppointments,
        label: category.categoryName,
    }));

    console.log('PieData', PieData);

    return (
        <PieChart
            series={[
                {
                    data: PieData,
                    innerRadius: 30,
                    outerRadius: 100,
                    paddingAngle: 5,
                    cornerRadius: 5,
                    highlightScope: { faded: "global", highlighted: "item" },
                    faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
                }
            ]}
            height={300}
        />
    );
}

export default CategoriesPieChart;
