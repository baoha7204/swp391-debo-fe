import { PieChart } from '@mui/x-charts/PieChart';

type TreatmentCategoriesProp = {
    treatId: number;
    totalAppointments: number;
    treatmentName: string;
}

type TreatmentPieChartProps = {
    treatmentCategories: TreatmentCategoriesProp[];
}

function TreatmentPieChart({ treatmentCategories }: TreatmentPieChartProps) {

    const PieData = treatmentCategories.map((treatment) => ({
        value: treatment.totalAppointments,
        label: treatment.treatmentName,
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
