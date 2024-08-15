// import {
//     ApiCallid,
// ApiCallActivity,
// ApiCallPerformance,
// ApiCallAverageSession,
// } from "./mock";

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ApiCallid,
  ApiCallActivity,
  ApiCallPerformance,
  ApiCallAverageSession,
} from "./ApiCall";

const UserProfile = ({ dataType, render }) => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let userData;
        switch (dataType) {
          case "userInfos":
            let userDatas = await ApiCallid(id);
            if (!userDatas || !userDatas.id) {
              throw new Error("ID non trouvé");
            }
            let userScore = userDatas.todayScore || userDatas.score;
            userData = {
              // Modélisation des données
              id: userDatas.id,
              userInfos: {
                firstName: userDatas.userInfos.firstName,
                lastName: userDatas.userInfos.lastName,
                age: userDatas.userInfos.age,
              },
              todayScore: userScore,
              keyData: userDatas.keyData,
            };
            break;
          case "activity":
            let activityDatas = await ApiCallActivity(id);
            if (!activityDatas || !activityDatas.userId) {
              throw new Error("ID non trouvé");
            }
            userData = {
              userId: activityDatas.userId,
              sessions: activityDatas.sessions.map((session) => ({
                day: session.day,
                kilogram: session.kilogram,
                calories: session.calories,
              })),
            };
            break;
          case "performance":
            let performanceData = await ApiCallPerformance(id);
            if (!performanceData || !performanceData.userId) {
              throw new Error("ID non trouvé");
            }
            userData = {
              id: performanceData.userId,
              kind: performanceData.kind,
              data: performanceData.data.map((item) => ({
                value: item.value,
                kind: item.kind,
              })),
            };
            break;
          case "averageSession":
            let averageSessionData = await ApiCallAverageSession(id);
            if (!averageSessionData || !averageSessionData.userId) {
              throw new Error("ID non trouvé");
            }
            userData = {
              id: averageSessionData.userId,
              sessions: averageSessionData.sessions.map((session) => ({
                day: session.day,
                sessionLength: session.sessionLength,
              })),
            };
            break;
          default:
            throw new Error("Invalid dataType");
        }

        setUserData(userData);
        setLoading(false);
      } catch (error) {
        console.error("Error in componentDidMount:", error);
        setError(error.message);
        setLoading(false);
        navigate("/404"); 
      }
    };

    fetchData();
  }, [id, dataType, navigate]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p>Erreur : {error}</p>;
  }

  if (!userData) {
    return null;
  }

  return <div>{render(userData)}</div>;
};

export default UserProfile;
