/*
 * @Author: Jerrychan
 * @Date: 2018-11-19 23:54:28
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-11-20 12:30:35
 * @Description: 图片上传封装
 */

import React,{Component}from 'react';
import FileUpload   from './react-fileupload.jsx';

class FileUploader extends Component{
    render(){
        const options={
            baseUrl         :'/manage/product/upload.do',
            fileFieldName   : 'upload_file',
            dataType        : 'json',
            chooseAndUpload : true,           //自动上传
            uploadSuccess   : (res) => {
                this.props.onSuccess(res.data);
            },
            uploadError     : (err) => {
                this.props.onError(err.message || '上传图片出错啦');
            }
        }
        return (
            <FileUpload options={options}>
                <button className="btn btn-xs btn-default" ref="chooseAndUpload">请选择图片</button>
            </FileUpload>
        )           
    }
}
export default FileUploader;