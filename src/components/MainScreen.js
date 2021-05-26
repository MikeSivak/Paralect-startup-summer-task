import React from 'react';
import '../styles/MainScreen.css';

class MainScreen extends React.Component {
    render() {
        return (
            <div>
                <div className='ms-group-289'>
                    <div className='ms-group-288'>
                        <img src='https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/NpjYRq4_nTSuCpesNxFHZ6yeKhg5Ac3hvUUlBtZcnqE5FfKcc4I7zXRD9d3vvaGZ8CWEYHdv2T6qPiN3H177JFl0.jpg?size=200x0&quality=96&crop=344,8,1689,1689&ava=1' className='ms-profile-photo' alt='ph'></img>
                    </div>
                    <div className='ms-group-296'>
                        <div className='ms-group-302'>
                            <div className='ms-group-300'>
                                <div className='ms-group-293'>
                                    <div className='ms-group-292'>
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0552 8.73877C16.0552 10.9488 14.259 12.7388 12.0414 12.7388C9.82371 12.7388 8.02751 10.9488 8.02751 8.73877C8.02751 6.52877 9.82371 4.73877 12.0414 4.73877C14.259 4.73877 16.0552 6.52877 16.0552 8.73877ZM4.01367 18.7388C4.01367 16.0788 9.36211 14.7388 12.0414 14.7388C14.7206 14.7388 20.069 16.0788 20.069 18.7388V19.7388C20.069 20.2888 19.6175 20.7388 19.0656 20.7388H5.01713C4.46523 20.7388 4.01367 20.2888 4.01367 19.7388V18.7388Z" fill="#808080" />
                                        </svg>
                                        <label className='ms-lbl-following'>171 following</label>
                                    </div>
                                </div>
                            </div>
                            <div className='ms-group-301'>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.028 8.73877C11.028 10.3988 9.69338 11.7388 8.02764 11.7388C6.3619 11.7388 5.01726 10.3988 5.01726 8.73877C5.01726 7.07877 6.3619 5.73877 8.02764 5.73877C9.69338 5.73877 11.028 7.07877 11.028 8.73877ZM19.0557 8.73877C19.0557 10.3988 17.7211 11.7388 16.0553 11.7388C14.3896 11.7388 13.0449 10.3988 13.0449 8.73877C13.0449 7.07877 14.3896 5.73877 16.0553 5.73877C17.7211 5.73877 19.0557 7.07877 19.0557 8.73877ZM8.02764 13.7388C5.68958 13.7388 1.00342 14.9088 1.00342 17.2388V18.7388C1.00342 19.2888 1.45498 19.7388 2.00688 19.7388H14.0484C14.6003 19.7388 15.0519 19.2888 15.0519 18.7388V17.2388C15.0519 14.9088 10.3657 13.7388 8.02764 13.7388ZM15.082 13.7888C15.4332 13.7588 15.7643 13.7388 16.0553 13.7388C18.3934 13.7388 23.0795 14.9088 23.0795 17.2388V18.7388C23.0795 19.2888 22.628 19.7388 22.0761 19.7388H16.8782C16.9885 19.4288 17.0588 19.0888 17.0588 18.7388V17.2388C17.0588 15.7688 16.266 14.6588 15.1221 13.8288C15.1191 13.8257 15.116 13.8218 15.1127 13.8175C15.1051 13.8076 15.096 13.7957 15.082 13.7888Z" fill="#808080" />
                                </svg>
                                <label className='ms-lbl-followers'>68.5k followers</label>
                            </div>
                        </div>
                        <label className='ms-lbl-username'>Mike Sivak</label>
                        <label className='ms-lbl-nickname'>noizemcnorm</label>
                    </div>
                </div>
                <label className='ms-lbl-repo-count'>Repositories (249)</label>
                <div className='ms-group-294'>
                    <div className='ms-group-294-content'>
                        <label className='ms-lbl-repo-name'>react-hot-loader</label>
                        <label className='ms-lbl-repo-descript'>Paralect summer startup project 2021</label>
                    </div>
                </div>
                <div className='ms-pagination'>
                    <label className='ms-pagination-name'>5-8 of 249 items</label>
                    <svg width="44" height="46" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4141 13.0001L14.707 8.70718L13.2928 7.29297L7.58569 13.0001L13.2928 18.7072L14.707 17.293L10.4141 13.0001Z" fill="#0064EB" />
                    </svg>
                    <div className='pages'>
                        <label className='ms-pagination-number'>1</label>
                        <label className='ms-pagination-number'>2</label>
                        <label className='ms-pagination-number'>3</label>
                        <label className='ms-pagination-number'>...</label>
                        <label className='ms-pagination-number'>10</label>
                    </div>
                    <svg width="44" height="46" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 8L15 13L10 18" stroke="#808080" stroke-width="2" />
                    </svg>
                </div>
            </div>
        );
    }
}

export default MainScreen;