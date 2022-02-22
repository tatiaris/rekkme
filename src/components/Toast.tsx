import { fetchEventSource } from '@microsoft/fetch-event-source';
import { config } from './config';

export const notify = (data) => {

    /*
    const Tst = () => (
        <div className='toast'>
            <div className='toast-icon'>
                
            </div>
            <div className='toast-content'>
            <p className='toast-title'>{data.username}</p>
            <p className='toast-message'>{data.message}</p>
            </div>
        </div>
    );
    */
}

export const registerForNotifiy = async (session) => {

    console.log("HELLOOOOOOOOOOOOO");
    console.log(config.springUrl);
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
            console.log(err);
        }
    });
}