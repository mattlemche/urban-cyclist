import bell from './assets/images/bell.svg';
import helmet from './assets/images/helmet.svg';
import lights from './assets/images/lights.svg';
import passCarLeft from './assets/images/pass-car-left.svg';
import passCyclist from './assets/images/pass-cyclist.svg';
import properCue from './assets/images/proper-cue.svg';
import rightOfWay from './assets/images/right-of-way.svg';
import signal from './assets/images/signal.svg';
import trafficLight from './assets/images/traffic-light.svg';
import wave from './assets/images/wave.svg';

const ruleList = [
    {
        id: 1,
        title: 'Always obey right of way.',
        body: 'No one cares if you come to a complete stop at the stop sign, so long as you let pedestrians, cars and other cyclists have their proper turn.',
        imageUrl: rightOfWay,
        alt: 'Illustration of cyclist and vehicle at intersection.'
    },
    {
        id: 2,
        title: 'Always stop at stop lights.',
        body: 'No exceptions. Riding on the sidewalk to get around the 3 way intersection just makes it worse.',
        imageUrl: trafficLight,
        alt: 'Illustration of traffic lights.'
    }, 
    {
        id: 3,
        title: 'Get a bell and use it liberally.',
        body: 'For cars, pedestrians and always for passing your fellow cyclists. It\'s common courtesy.',
        imageUrl: bell,
        alt: 'Illustration of cyclist with emphasis on handlebar-mounted bell.'
    },
    {
        id: 4,
        title: 'Never pass a fellow cyclist ',
        optionalSpan: 'on the right.',
        body: 'Period.',
        imageUrl: passCyclist,
        alt: 'Illustration of cyclist\'s path around other cyclist, passing on the left.'
    },
    {
        id: 5,
        title: 'Pass right-turning cars on the left.',
        body: 'Unless there is a *bike zone*, you are legally obligated to pass right turning cars on the left, it\'s much safer than trying to squeeze by on the right.',
        imageUrl: passCarLeft,
        alt: 'Illustration of cyclist\'s path around right-turning vehicle, passing on the left.'
    },
    {
        id: 6,
        title: 'Don\'t pull to the front at a light.',
        body: 'Unless you\'re in full club kit on your aero carbon bike, don\'t pull to the front at a light. Wait your turn and pass when the light is green. To roll to the front is rude. To roll to the front at a light and then ride slowly is unbelievably infuriating.',
        imageUrl: properCue,
        alt: 'Illustration of two cyclists stopped at an intersection.'
    },
    {
        id: 7,
        title: 'Have lights.',
        body: 'If it\'s not bright and sunny, turn your lights on.',
        imageUrl: lights,
        alt: 'Illustration of cyclist with emphasis on front and rear light.'
    },
    {
        id: 8,
        title: 'Indicate what you\'re doing.',
        body: 'You can point or use the standard signals, but if you\'re switching lanes, passing, turning, or stopping suddenly, please let everyone around you know.',
        imageUrl: signal,
        alt: 'Illustration of cyclist signalling a left turn.'
    },
    {
        id: 9,
        title: 'Wear a helmet.',
        body: '',
        imageUrl: helmet,
        alt: 'Illustration of a bike helmet.'
    },
    {
        id: 10,
        title: 'Recognize that everyone makes mistakes.',
        body: 'That includes cars, pedestrians, and cyclists. Have space for that.',
        imageUrl: wave,
        alt: 'Illustration of a cyclist smiling and waving.'
    }


];

export default ruleList;

