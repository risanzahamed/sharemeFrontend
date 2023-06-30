import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {  } from "react-icons/md";

const Spinner = ({ message }) => {
    return (
        // <div>
        //     <div className="w-16 h-16 items-center justify-center text-center align-middle border-4 border-dashed rounded-full animate-spin dark:border-green-700"></div>
        //     <p>{message}</p>
        // </div>
        <div className="flex flex-col justify-center items-center w-full h-full">
            <AiOutlineLoading3Quarters
                type="Circles"
                color="#00BFFF"
                height={50}
                width={200}
                className="m-5"
            />

            <p className="text-lg text-center px-2">{message}</p>
        </div>
    );
};

export default Spinner;