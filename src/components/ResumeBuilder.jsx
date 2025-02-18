import "../css/ResumeBuilder.css";
import phoneIcon from '../assets/phone.svg'

function ResumeBuilder({ person, schoolHistory, workHistory }) {
  const workHistoryElements = workHistory.map((item) => {
    return(
      <div key={item.key} className="history-item">
        <h3>Company: {item.company}</h3>
        <h3>Position: {item.position}</h3>
        <h3>{item.workStart} - {item.workEnd}</h3>
        <h3>Responsibilities: </h3>
        <p>{item.responsibilities}</p>
      </div>
    )
  })

  const schoolHistoryElements = schoolHistory.map((item) => {
    return(
      <div key={item.key} className="history-item">
        <h3>School: {item.schoolName}</h3>
        <h3>Area of Study: {item.field}</h3>
        <h3>{item.studyStart} - {item.studyEnd}</h3>
      </div>
    )
  })

  return <>
    <h1 className="user-name-resume">{person.firstName} {person.lastName}</h1>
    <h2><img src={phoneIcon} className="icon" />{person.phoneNumber}</h2>
    <h2 className="work-history-resume">Work History: </h2>
    {workHistoryElements}
    <h2 className="school-history-resume">School History: </h2>
    {schoolHistoryElements}
  </>;
}

export default ResumeBuilder;
