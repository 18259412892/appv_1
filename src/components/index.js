const plugls = [];
const install = (app)=>{
    plugls.forEach(plugin=>app.use(plugin))
};
export default {
    install
}
