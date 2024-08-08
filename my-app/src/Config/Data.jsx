// import { getUserActivity,getUserAverageSessions, getUserInfos, getUserPerformance, } from "./Api";
// import {
//   getUserActivity,
//   getUserAverageSessions,
//   getUserInfos,
//   getUserPerformance,
// } from "./mock";

import React, { Component } from 'react';
import { ApiCallid, ApiCallActivity, ApiCallPerformance, ApiCallAverageSession } from './ApiCall';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      loading: true,
      error: null,
    };
  }

  async componentDidMount() {
    const { id, dataType } = this.props;

    try {
      let userData;
      switch (dataType) {
        case "userInfos":
         let userDatas = await ApiCallid(id);
           userData = {
            //model the data
            id: userDatas.id,
            userInfos: {
              firstName: userDatas.userInfos.firstName,
              lastName: userDatas.userInfos.lastName,
              age: userDatas.userInfos.age,
            },
            todayScore: userDatas.todayScore,
            keyData: userDatas.keyData,
          };
          break;
        case "activity":
        let  activityDatas = await ApiCallActivity(id);
          userData = {
            userId: activityDatas.userId,
          sessions: activityDatas.sessions.map(session => ({
            day: session.day,
            kilogram: session.kilogram,
            calories: session.calories
          }))
          }
          break;
        case 3:
          userData = await ApiCallPerformance(id);
          break;
        case "session":
         userDatas = await ApiCallAverageSession(id);
         userData={
            id: userDatas.id,
            sessions: [
                {day: userDatas.session.day,
                    sessionLength:userDatas.session.sessionLength
                }]
         }
          break;
        default:
          throw new Error("Invalid dataType");
      }

      this.setState({ userData, loading: false });
    } catch (error) {
      console.error("Error in componentDidMount:", error);
      this.setState({ error: error.message, loading: false });
    }
  }

  render() {
    const { userData, loading, error } = this.state;

    if (loading) {
      return <p>Chargement...</p>;
    }

    if (error) {
      return <p>Erreur : {error}</p>;
    }

    if (!userData) {
      return null;
    }

    // Utilisez les données pour le rendu
    return (
      <div>
        {this.props.render(userData)}
      </div>
    );
  }
}

export default UserProfile;
