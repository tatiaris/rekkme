import { fetchEventSource } from '@microsoft/fetch-event-source';
import { toast } from 'react-toastify';
import { config } from './config';

const notify = (data) => {

    const Tst = () => (
        <div className='toast'>
            <div className='toast-icon'>
                <img src={data.avatar}></img>
            </div>
            <div className='toast-content'>
            <p className='toast-title'>{data.username}</p>
            <p className='toast-message'>{data.message}</p>
            </div>
        </div>
    );

    toast(<Tst />, {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export const registerForNotifiy = async (session) => {

    if (session === null) return;
    await fetchEventSource(config.springUrl + '/notify/handshake', {
        method: 'GET',
        credentials: 'include',
        onmessage(ev) {
            notify(JSON.parse(ev.data));
        },
        onclose() {
            console.log('sse was closed');
        },
        onerror(err) {
            console.log('an error was found connecting to sse');
        }
    });
}