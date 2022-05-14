import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div className="hero min-h-screen lg:bg-[url('assets/images/bg.png')]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='dentist chair' className="max-w-sm md:max-w-md lg:max-w-xl rounded-lg shadow-2xl" />
                <div className='pr-0 lg:pr-28'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;