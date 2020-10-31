import Loading from './Loading';
const plugls = [
    Loading
];
const install = (app)=>{
    plugls.forEach(plugin=>app.use(plugin))
};
export default {
    install
}
