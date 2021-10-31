import './PieCharts.css'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const PieCharts = () => {

    const percentage = 90;
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <div style = {{boxShadow: '0px 0px 3px 0px', borderRadius: '.25rem'}} className = 'box'>
                        <div style = {{width: '150px', height: '150px'}}>
                            <CircularProgressbar  value={percentage} text={`${percentage}%`} styles={buildStyles({textColor: "black", pathColor: '#0d6efd'})} />;
                        </div>
                    <h2 className = 'text-center'>
                        Tiempo restante para el próximo pago diario
                    </h2>
                    </div>
                </div>
            
                <div className="col-6">
                    <div style = {{boxShadow: '0px 0px 3px 0px', borderRadius: '.25rem'}} className = 'box'>
                        <div style = {{width: '150px', height: '150px'}}>
                            <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({textColor: "black", pathColor: '#0d6efd'})}/>;
                        </div>
                    <h2 className = 'text-center'>
                        Tiempo restante para que tu paquete expire
                    </h2>
                    </div>
                </div>
            </div>
        </>
    )
}
