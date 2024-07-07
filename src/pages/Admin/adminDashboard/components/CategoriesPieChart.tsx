import { PieChart } from '@mui/x-charts/PieChart';

type TreatmentCategoriesProp = {
    category: number;
    totalAppointments: number;
}

type CategoriesPieChartProps = {
    treatmentCategories: TreatmentCategoriesProp[];
}

function CategoriesPieChart({ treatmentCategories }: CategoriesPieChartProps) {
    const PieData = treatmentCategories.map((category) => ({
        value: category.totalAppointments,
        label: category.category === 1 ? 'Medical' : 'Cosmetic',
    }));

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
