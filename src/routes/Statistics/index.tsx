import ApexCharts from "react-apexcharts";
import { Section } from "../../components/Section";
import { useData } from "../../hooks/useData";
import styles from "./index.module.css";

export function Statistics() {
  const { completedResults } = useData();

  console.log(completedResults);

  if (!completedResults?.results) {
    return null;
  }

  const completedGamesPerYear = completedResults!.results.reduce<{ [key: number]: number }>((series, game) => {
    const year = new Date(game.user.added).getFullYear();
    return {
      ...series,
      [year]: (series[year] || 0) + 1,
    };
  }, {});

  return (
    <div className={styles.statistics}>
      <Section title="Completed games per year">
        <ApexCharts
          type="bar"
          series={[{ name: "completed-games-per-year", data: Object.values(completedGamesPerYear) }]}
          options={{
            xaxis: { categories: Object.keys(completedGamesPerYear) },
            tooltip: { enabled: false },
            yaxis: { show: false },
            chart: { toolbar: { show: false } },
          }}
        />
      </Section>
    </div>
  );
}
