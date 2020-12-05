
const events = ['Vue.js Lyon Conf']

export default function getEventCount (value) {
    value = value.toLowerCase();
    return events.filter((event => event.toLowerCase().includes(value))).length;
}
