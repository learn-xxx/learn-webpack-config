import moment from 'moment'

//手动引入所需要的语言包
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

let r = moment().endOf('day').fromNow();

export default r;
