import { Link } from "react-router-dom";
import { Content } from "./style";
import { RiCloseFill } from 'react-icons/ri'
import { BiSearchAlt } from 'react-icons/bi'

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function InputSearch({ label, onChange, value }: Props) {
  return (
    <Content>

      <label htmlFor="">{label}</label>



      <div>
        <BiSearchAlt size={25} />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button
          onClick={() => onChange('')}
        >
          <RiCloseFill size={20} />
        </button>
      </div>


    </Content >
  )
}
