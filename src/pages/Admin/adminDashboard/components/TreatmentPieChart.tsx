import { PieChart } from '@mui/x-charts/PieChart';

type TreatmentCategoriesProp = {
    treatId: number;
    totalAppointments: number;
}

type TreatmentPieChartProps = {
    treatmentCategories: TreatmentCategoriesProp[];
}

function TreatmentPieChart({ treatmentCategories }: TreatmentPieChartProps) {
    const treatIdToLabel: { [key: number]: string } = {
        1: 'Nieng Rang Cao Cap',
        2: 'test',
        3: 'Nho Rang',
        4: 'Rang su luxury'
    };

    const PieData = treatmentCategories.map((treatment) => ({
        value: treatment.totalAppointments,
        label: treatIdToLabel[treatment.treatId] || 'Unknown'
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

export default TreatmentPieChart;
