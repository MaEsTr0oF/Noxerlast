import { useState, useEffect } from "react";
import { getProjectData, ProjectDataType } from "@/data/fakeData";

export function useProjectData() {
  const [data, setData] = useState<ProjectDataType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true);
        const apiData = await getProjectData();

        if (isMounted) {
          setData(apiData);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err instanceof Error ? err : new Error("Ошибка при загрузке данных")
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, loading, error };
}
