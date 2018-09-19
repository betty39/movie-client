export default {
  // configure
  baseURL: 'http://121.194.62.88:8085/',
  method: 'post',

  /**
   * ajax 接口，前端数据交互时请求
   */
  loginApi: {url: 'user/account/login'},
  permissionlist: {url: 'admin/permission/college-and-branch'},//获取负责的权限下的学院和党支部
  jinduinfo: {url: 'student/home/jindu'}, // 进度通知
  stunotify: {url: 'student/home/notify-lists'}, // 学生端数据通知
  admnotify: {url: 'admin/home/notify'}, // 管理员端数据通知
  traininform: {url: 'student/join-party/train-class'}, // 培训班通知
  codecollege: {url: 'common/code/college'},// 获取学院代码
  codepartybranch: {url: 'common/code/party-branch'}, // 获取党支部代码
  applylist: {url: 'admin/join-party/apply-lists'}, // 获取申请书列表
  zhuanzhenglist: {url: 'student/join-party/regular-apply'}, // 上传转正申请书
  peiyanglist: {url: 'admin/join-party/communicator'}, // 获取联系人列表
  shenheapply: {url: 'admin/join-party/auditor-apply'}, // 审核申请书
  developerlist: {url: 'admin/join-party/developers'}, // 获取发展对象列表
  assignrudang: {url: 'admin/join-party/submit-rudang-communicator'}, // 为发展对象指定入党介绍人
  activistslist: {url: 'admin/join-party/activists'}, // 获取积极分子列表
  tuiyou: {url: 'admin/join-party/tuiyou'}, // 积极分子和发展对象的推优
  courselist: {url: 'admin/join-party/train-lists'}, // 获取培训班列表
  publishcourse: {url: 'admin/join-party/publish-training'}, // 发布培训班信息
  updatecourse: {url: 'admin/join-party/update-train'}, // 更新培训班信息
  downloadgrade: {url: 'admin/join-party/export-grade-header'}, // 下载培训班成绩导入模版
  precandidates: {url: 'admin/join-party/pre-party-candidates'}, // 获取预备党员候选人列表
  partylists: {url: 'admin/join-party/ni-pre-or-party-lists'}, // 获取拟录取或上报的预备党员／党员列表
  submitparty: {url: 'admin/join-party/submit-pre-or-party'}, // 审核／拟录取或上报预备党员/党员
  partycandidates: {url: 'admin/join-party/party-candidates'}, // 获取党员候选人列表
  transforlist: {url: 'admin/join-party/regular-apply-lists'}, // 查看转正申请书列表
  submittransfer: {url: 'admin/join-party/auditor-regular-apply'}, // 审核转正申请书
  auditorpass: {url: 'admin/join-party/auditor-pre-and-party'}, // 审核上报的预备党员
  publicnotify: {url: 'student/join-party/public-notify'}, // 预备/党员公示
  viewgrade: {url: 'admin/join-party/get-train-grades'}, // 查看培训班成绩
  listreport: {url: 'student/join-party/report-logs'}, // 查看思想汇报
  communicatorstu: {url: 'student/contact/get-student-lists'}, // 联系人查看自己的培养对象
  otherreportlist: {url: 'student/join-party/contact-reports'}, // 联系人查看思想汇报列表
  shenhereport: {url: 'student/join-party/auditor-report'}, // 联系人审核思想汇报

  positionlist: {url: 'admin/permission/position-lists'}, // 职位列表
  hadposlist: {url: 'admin/permission/haven-been-lists'}, // 已被授予权限的学生列表
  canbeenposition: {url: 'admin/permission/can-been-admin-lists'}, // 能被授予权限的学生列表
  allocatepos: {url: 'admin/permission/allocate'}, // 给用户分配管理的学院以及党支部
  getcollegeandparty: {url: 'admin/permission/college-and-branch'}, // 获取用户所负责的学院&党支部

  viewalllogs: {url: 'admin/operation-log/all'}, // 查看总操作记录
  viewbranchlogs: {url: 'admin/operation-log/branch'}, // 查看分党支部操作记录
}
