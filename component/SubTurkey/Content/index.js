import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SubProperties from "./SubProperties";
import axios from "axios";

const Index = () => {
  const { locale } = useRouter();
  const [realStates, setRealStates] = useState([]);
  const router = useRouter();
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [minSpace, setMinSpace] = useState("");
  const [maxSpace, setMaxSpace] = useState("");
  const { params = [] } = router.query;
  useEffect(() => {
    const x = params.slice(-4, -2);
    const y = params.slice(-2);
    x;
    setMinPrice(y[0]);
    setMaxPrice(y[1]);
    setMinSpace(x[0]);
    setMaxSpace(x[1]);
    if(!router.asPath.search("SubTurkey")){
    axios({
      method: "get",
      url: `${process.env.apiUrl}realestates?langCode=${locale}${
        localStorage.getItem("filterCityId")
          ? "&cityId=" + localStorage.getItem("filterCityId")
          : "&cityId=1"
      }${
        localStorage.getItem("filterMunicipalityId")
          ? "&municipalityId=" + localStorage.getItem("filterMunicipalityId")
          : ""
      }${
        localStorage.getItem("filterTypeId")
          ? "&typeId=" + localStorage.getItem("filterTypeId")
          : ""
      }${
        localStorage.getItem("filterFeatureId")
          ? "&typeId=" + localStorage.getItem("filterFeatureId")
          : ""
      }${maxPrice ? "&maxPrice=" + maxPrice : ""}${
        minPrice ? "&minPrice=" + minPrice : ""
      }${maxSpace ? "&maxSpace=" + maxSpace : ""}${
        minSpace ? "&minSpace=" + minSpace : ""
      }
    
      `,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      setRealStates(res.data.rows);
    });
  }
  }, []);
  return (
    <div className="content_backBlock p-3">
      <SubProperties realStates={realStates && realStates} />
    </div>
  );
};
export default Index;
