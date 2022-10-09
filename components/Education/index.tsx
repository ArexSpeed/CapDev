interface EduProps {
  date?: string;
  university?: string;
  department?: string;
  field?: string;
}

function Education({ date, university, department, field }: EduProps) {
  return (
    <div className="flex items-center w-3/4 h-12 my-3 bg-white rounded-md justify-evenly">
      <div>{date}</div>
      <div>{university}</div>
      <div>{department}</div>
      <div>{field}</div>
    </div>
  );
}

export default Education;
