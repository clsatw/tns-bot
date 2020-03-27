webpackHotUpdate(0,{

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<Page class='page'>\n    <Page.actionBar>\n        <ActionBar class='action-bar' title=\"Device ID: {{devId}}\"></ActionBar>\n    </Page.actionBar>\n    <ScrollView>\n        <StackLayout verticalAlignment='center' horizontalAlignment='center'>\n            <GridLayout columns='auto, auto, auto' rows='auto, auto, auto'>\n                <Button [disabled]=\"{{(this.navMode$|async)?}}\" class='btn' (touch)=\"btnF$.next($event)\" text='Forward' row='0' col='1'></Button>\n                <Button class='btn' (touch)=\"btnL$.next($event)\" text='Left' row='1' col='0'></Button>\n                <ActivityIndicator row='1' col='1' [busy]='this.navMode$ | async' class=\"activity-indicator\">\n                </ActivityIndicator>\n                <Button visibility=\"{{(this.navMode$|async)? 'collapse':'visible'}}\" class='stopBtn'\n                    (touch)=\"btnS$.next($event)\" text='Stop' row='1' col='1'></Button>\n                <Button class='btn' (touch)=\"btnR$.next($event)\" text='Right' row='1' col='2'></Button>\n                <Button class='btn' (touch)=\"btnB$.next($event)\" text='Back' row='2' col='1'></Button>\n            </GridLayout>\n            <label class=\"hr-dark m-10\"></label>\n\n            <label textAlignment='center' textWrap='true' text='離障礙物最短距離'\n                class='text-primary h3 description-label'></label>\n            <Slider (valueChange)=\"disToWall$.next($event)\" value=\"10\" minValue=\"10\" maxValue=\"200\" class='slider'>\n            </Slider>\n            <label textAlignment='center' textWrap='true' text='速度' class='h3 description-label'></label>\n            <Slider (valueChange)=\"inputSpeed$.next($event)\" value=\"50\" minValue=\"10\" maxValue=\"255\"></Slider>\n            <label class='text-danger' textAlignment='center' text='自駕模式' textWrap='true'></label>\n            <Switch checked=\"false\" (checkedChange)=\"autoPilot$.next($event.value)\" class=\"switch\" horizontalAlignment=\"center\"></Switch>\n        </StackLayout>\n    </ScrollView>\n</Page>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3SEFBd0gsT0FBTyw2UEFBNlAsd0JBQXdCLGdZQUFnWSw2Q0FBNkMsb3NDIiwiZmlsZSI6IjAuZTYwMDZhZTM1ODY0NzdlYTQxMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSBjbGFzcz0ncGFnZSc+XFxuICAgIDxQYWdlLmFjdGlvbkJhcj5cXG4gICAgICAgIDxBY3Rpb25CYXIgY2xhc3M9J2FjdGlvbi1iYXInIHRpdGxlPVxcXCJEZXZpY2UgSUQ6IHt7ZGV2SWR9fVxcXCI+PC9BY3Rpb25CYXI+XFxuICAgIDwvUGFnZS5hY3Rpb25CYXI+XFxuICAgIDxTY3JvbGxWaWV3PlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHZlcnRpY2FsQWxpZ25tZW50PSdjZW50ZXInIGhvcml6b250YWxBbGlnbm1lbnQ9J2NlbnRlcic+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz0nYXV0bywgYXV0bywgYXV0bycgcm93cz0nYXV0bywgYXV0bywgYXV0byc+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gW2Rpc2FibGVkXT1cXFwie3sodGhpcy5uYXZNb2RlJHxhc3luYyk/fX1cXFwiIGNsYXNzPSdidG4nICh0b3VjaCk9XFxcImJ0bkYkLm5leHQoJGV2ZW50KVxcXCIgdGV4dD0nRm9yd2FyZCcgcm93PScwJyBjb2w9JzEnPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPSdidG4nICh0b3VjaCk9XFxcImJ0bkwkLm5leHQoJGV2ZW50KVxcXCIgdGV4dD0nTGVmdCcgcm93PScxJyBjb2w9JzAnPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8QWN0aXZpdHlJbmRpY2F0b3Igcm93PScxJyBjb2w9JzEnIFtidXN5XT0ndGhpcy5uYXZNb2RlJCB8IGFzeW5jJyBjbGFzcz1cXFwiYWN0aXZpdHktaW5kaWNhdG9yXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9BY3Rpdml0eUluZGljYXRvcj5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2aXNpYmlsaXR5PVxcXCJ7eyh0aGlzLm5hdk1vZGUkfGFzeW5jKT8gJ2NvbGxhcHNlJzondmlzaWJsZSd9fVxcXCIgY2xhc3M9J3N0b3BCdG4nXFxuICAgICAgICAgICAgICAgICAgICAodG91Y2gpPVxcXCJidG5TJC5uZXh0KCRldmVudClcXFwiIHRleHQ9J1N0b3AnIHJvdz0nMScgY29sPScxJz48L0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz0nYnRuJyAodG91Y2gpPVxcXCJidG5SJC5uZXh0KCRldmVudClcXFwiIHRleHQ9J1JpZ2h0JyByb3c9JzEnIGNvbD0nMic+PC9CdXR0b24+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9J2J0bicgKHRvdWNoKT1cXFwiYnRuQiQubmV4dCgkZXZlbnQpXFxcIiB0ZXh0PSdCYWNrJyByb3c9JzInIGNvbD0nMSc+PC9CdXR0b24+XFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiaHItZGFyayBtLTEwXFxcIj48L2xhYmVsPlxcblxcbiAgICAgICAgICAgIDxsYWJlbCB0ZXh0QWxpZ25tZW50PSdjZW50ZXInIHRleHRXcmFwPSd0cnVlJyB0ZXh0PSfpm6LpmpznpJnnianmnIDnn63ot53pm6InXFxuICAgICAgICAgICAgICAgIGNsYXNzPSd0ZXh0LXByaW1hcnkgaDMgZGVzY3JpcHRpb24tbGFiZWwnPjwvbGFiZWw+XFxuICAgICAgICAgICAgPFNsaWRlciAodmFsdWVDaGFuZ2UpPVxcXCJkaXNUb1dhbGwkLm5leHQoJGV2ZW50KVxcXCIgdmFsdWU9XFxcIjEwXFxcIiBtaW5WYWx1ZT1cXFwiMTBcXFwiIG1heFZhbHVlPVxcXCIyMDBcXFwiIGNsYXNzPSdzbGlkZXInPlxcbiAgICAgICAgICAgIDwvU2xpZGVyPlxcbiAgICAgICAgICAgIDxsYWJlbCB0ZXh0QWxpZ25tZW50PSdjZW50ZXInIHRleHRXcmFwPSd0cnVlJyB0ZXh0PSfpgJ/luqYnIGNsYXNzPSdoMyBkZXNjcmlwdGlvbi1sYWJlbCc+PC9sYWJlbD5cXG4gICAgICAgICAgICA8U2xpZGVyICh2YWx1ZUNoYW5nZSk9XFxcImlucHV0U3BlZWQkLm5leHQoJGV2ZW50KVxcXCIgdmFsdWU9XFxcIjUwXFxcIiBtaW5WYWx1ZT1cXFwiMTBcXFwiIG1heFZhbHVlPVxcXCIyNTVcXFwiPjwvU2xpZGVyPlxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0ndGV4dC1kYW5nZXInIHRleHRBbGlnbm1lbnQ9J2NlbnRlcicgdGV4dD0n6Ieq6aeV5qih5byPJyB0ZXh0V3JhcD0ndHJ1ZSc+PC9sYWJlbD5cXG4gICAgICAgICAgICA8U3dpdGNoIGNoZWNrZWQ9XFxcImZhbHNlXFxcIiAoY2hlY2tlZENoYW5nZSk9XFxcImF1dG9QaWxvdCQubmV4dCgkZXZlbnQudmFsdWUpXFxcIiBjbGFzcz1cXFwic3dpdGNoXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPjwvU3dpdGNoPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIiJdLCJzb3VyY2VSb290IjoiIn0=