/*
 * @Author: Jerrychan
 * @Date: 2018-11-13 18:54:11
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-11-21 14:41:36
 * @Description:  添加商品页面
 */

import React, { Component } from 'react';
import PageTitle from 'component/page-title/index.jsx';
import CategorySelector from './category-selector.jsx';
import FileUploader from 'util/file-uploader/index.jsx';
import './save.less';
class ProductSave extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.match.params.pid,
			name: '',
			subtitle: '',
			categoryId: 0,
			parentCategoryId: 0,
			subImages: [],
			price: '',
			stock: '',
			detail: '',
			status: 1, //商品状态1为在售
		};
	}
	// 简单字段的改变，比如商品名称，描述，价格，库存
	onValueChange(e) {
		let name = e.target.name,
			value = e.target.value.trim();
		this.setState({
			[name]: value,
		});
	}
	onSubmit() {
		alert('添加');
	}
	//品类选择器的变化
	onCategoryChange(categoryId, parentCategoryId) {
		console.log(categoryId, parentCategoryId);
	}
	// 上传图片成功
	onUploadSuccess(res) {
		let subImages = this.state.subImages;
		subImages.push(res);
		this.setState({
			subImages: subImages,
		});
	}
	// 上传图片失败
	onUploadError(errMsg) {
		_mm.errorTips(errMsg);
	}
	// 删除图片
	onImageDelete(e) {
		//删除的下标强转int类型
		let index = parseInt(e.target.getAttribute('index')),
			subImages = this.state.subImages;
		subImages.splice(index, 1);
		this.setState({
			subImages: subImages,
		});
	}
	render() {
		return (
			<div id="page-wrapper">
				<PageTitle title={2 == 3 ? '编辑商品' : '添加商品'} />
				<div className="form-horizontal">
					<div className="form-group">
						<label className="col-md-2 control-label">商品名称</label>
						<div className="col-md-5">
							<input
								type="text"
								className="form-control"
								placeholder="请输入商品名称"
								name="name"
								onChange={e => this.onValueChange(e)}
							/>
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-2 control-label">商品描述</label>
						<div className="col-md-5">
							<input
								type="text"
								className="form-control"
								placeholder="请输入商品描述"
								name="subtitle"
								onChange={e => this.onValueChange(e)}
							/>
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-2 control-label">所属分类</label> 
						<CategorySelector
							categoryId={this.state.categoryId}
							parentCategoryId={this.state.parentCategoryId}
							onCategoryChange={(categoryId, parentCategoryId) => this.onCategoryChange(categoryId, parentCategoryId)}
						/>
					</div>
					<div className="form-group">
						<label className="col-md-2 control-label">商品价格</label>
						<div className="col-md-3">
							<div className="input-group">
								<input
									type="number"
									className="form-control"
									placeholder="价格"
									name="price"
									onChange={e => this.onValueChange(e)}
								/>
								<span className="input-group-addon">元</span>
							</div>
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-2 control-label">商品库存</label>
						<div className="col-md-3">
							<div className="input-group">
								<input
									type="number"
									className="form-control"
									placeholder="库存"
									name="stock"
									onChange={e => this.onValueChange(e)}
								/>
								<span className="input-group-addon">件</span>
							</div>
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-2 control-label">商品图片</label>
						<div className="col-md-10">
							{this.state.subImages.length ? (
								this.state.subImages.map((image, index) => (
									<div className="img-con" key={index}>
										<img className="img" src={image.url} />
										<i className="fa fa-close" index={index} onClick={e => this.onImageDelete(e)} />
									</div>
								))
							) : (
								<div>请上传图片</div>
							)}
						</div>
						<div className="col-md-offset-2 col-md-10 file-upload-con">
							<FileUploader
								onSuccess={res => this.onUploadSuccess(res)}
								onError={errMsg => this.onUploadError(errMsg)}
							/>
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-2 control-label">商品详情</label>
						<div className="col-md-10">
							{/* <RichEditor
								detail={this.state.detail}
								defaultDetail={this.state.defaultDetail}
								onValueChange={value => this.onDetailValueChange(value)}
							/> */}
						</div>
					</div>
					<div className="form-group">
						<div className="col-md-offset-2 col-md-10">
							<button
								type="submit"
								className="btn btn-primary"
								onClick={e => {
									this.onSubmit(e);
								}}
							>
								提交
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProductSave;
