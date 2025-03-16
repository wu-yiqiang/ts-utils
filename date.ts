// import dayjs from 'dayjs';
// export const calculateTimeDifference = (
//     startDate: Date,
//     endDate: Date,
//     isStr: Boolean = false,
//     $t: any,
// ) => {
//     // 将输入字符串转换为 Date 对象
//     const start = new Date(startDate).getTime();
//     const end = new Date(endDate).getTime();

//     // 计算时间差（以毫秒为单位）
//     const difference = end - start;
//     // 将时间差转换为秒、分钟、小时、天等
//     const seconds = Math.floor(Math.abs(difference) / 1000);
//     const minutes = Math.floor(seconds / 60);
//     const hours = Math.floor(minutes / 60);
//     const days = Math.floor(hours / 24);

//     // 剩余的秒、分钟、小时
//     const remainingSeconds = seconds % 60;
//     const remainingMinutes = minutes % 60;

//     let time = '';
//     if (!isStr) {
//         if (days > 3) {
//             time = `${days} ${$t('days')}`;
//             // time = `${days} 天 ${String(remainingHours).padStart(2, '0')}:${String(remainingMinutes).padStart(2, '0')}`;
//         } else if (hours > 0) {
//             time = `${hours}:${String(remainingMinutes).padStart(2, '0')}`;
//         } else {
//             time = `${String(remainingMinutes).padStart(2, '0')}:${String(
//                 remainingSeconds,
//             ).padStart(2, '0')}`;
//         }
//     } else {
//         if (days >= 2) {
//             time = `${$t('within')} ${days + 1} ${$t('days')}`;
//             // time = `${days} 天 ${String(remainingHours).padStart(2, '0')}:${String(remainingMinutes).padStart(2, '0')}`;
//         } else if (hours > 0) {
//             time = `${$t('within')} ${hours + 1} ${$t('hours2')}`;
//         } else {
//             time = `${$t('within')} 1 ${$t('hours2')}`;
//         }
//     }
//     return { time, difference, days, hours };
// };


// export const parseDate = (dateString: string) => {
//     const [day, month, year] = dateString.split('-').map(Number);
//     return new Date(year, month - 1, day); // 月份在 Date 对象中是从 0 开始的，所以需要减 1
// };

// export const formatDate = (date: Date, hoursMinutes = true) => {
//     return date
//         ? dayjs(date).format(`DD-MM-YYYY ${hoursMinutes ? 'HH:mm' : ''}`)
//         : '';
// };