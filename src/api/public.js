import axios from '@/util/request';
import {locGetItem} from '@/util/utils'
let pattern = locGetItem('pattern');
console.log(pattern)
export const getBannerList = (prarms) =>axios.get(pattern+'/order',prarms);
export const getBannerCommon = (prarms) =>axios.post(pattern+'/common',prarms);