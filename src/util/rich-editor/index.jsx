/*
 * @Author: Jerrychan
 * @Date: 2018-11-26 00:07:51
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-12-12 00:43:30
 * @Description: 富文本编辑器
 */

import React from 'react';
import Simditor from 'simditor';
import 'simditor/styles/simditor.css';
import './index.less';
// 通用的富文本编辑器，依赖jquery
class RichEditor extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.loadEditor();
	}
	// componentWillReceiveProps(nextProps) {
	// 	if (this.props.defaultDetail !== nextProps.defaultDetail) {
	// 		this.simditor.setValue(nextProps.defaultDetail);
	// 	}
	// }
	loadEditor() {
		let element = this.refs['textarea'];
		this.simditor = new Simditor({
			textarea: $(element),
			defaultValue: this.props.placeholder || '请输入详情内容',
			upload: {
				url: '/manage/product/richtext_img_upload.do', //上传七牛
				defaultImage: '',
				fileKey: 'upload_file',
			},
		});
		this.bindEditorEvent();
	}
	初始化富文本编辑器的事件;
	bindEditorEvent() {
		this.simditor.on('valuechanged', e => {
			this.props.onValueChange(this.simditor.getValue());
		});
	}
	render() {
		return (
			<div className="rich-editor">
				<textarea ref="textarea" />
			</div>
		);
	}
}

export default RichEditor;
