/*
 * @Author: Jerrychan
 * @Date: 2018-11-13 18:54:11
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-11-21 14:41:36
 * @Description:  添加商品页面
 */

import React, { Component } from "react";
import MUtil from "util/mm.jsx";
import Product from "service/product-service.jsx";
import PageTitle from "component/page-title/index.jsx";
import CategorySelector from "./category-selector.jsx";
import FileUploader from "util/file-uploader/index.jsx";

import "./save.less";

const _mm = new MUtil();
const _product = new Product();



class ProductSave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.pid,
      name: "",
      subtitle: "",
      categoryId: 0,
      parentCategoryId: 0,
      subImages: [],
      price: "",
      stock: "",
      detail: "",
      status: 1 //商品状态1为在售
    };
  }
  // 简单字段的改变，比如商品名称，描述，价格，库存
  onValueChange(e) {
    let name = e.target.name,
      value = e.target.value.trim();
    this.setState({
      [name]: value
    });
  }
  getSubImagesString() {
    return this.state.subImages.map(image => image.url).join(",");
  }
  onSubmit() {
    let product = {
      name: this.state.name,
      subtitle: this.state.subtitle,
      categoryId: parseInt(this.state.categoryId),
      subImages: this.getSubImagesString(),
      detail: this.state.detail,
      price: parseFloat(this.state.price),
      stock: parseInt(this.state.stock),
      status: this.state.status
    };
   let productCheckResult = _product.checkProduct(product);
    if (this.state.id) {
      product.id = this.state.id;
    }
    // 表单验证成功
    if (productCheckResult.status) {
      _product.saveProduct(product).then(
        res => {
          _mm.successTips(res);
          this.props.history.push("/product/index");
        },
        errMsg => {
          _mm.errorTips(errMsg);
        }
      );
    }
    // 表单验证失败
    else {
      _mm.errorTips(productCheckResult.msg);
    }
  }
  //品类选择器的变化
  onCategoryChange(categoryId, parentCategoryId) {
	console.log(categoryId, parentCategoryId);
	this.setState({
		categoryId          : categoryId,
		parentCategoryId    : parentCategoryId
	});
  }
  // 上传图片成功
  onUploadSuccess(res) {
    let subImages = this.state.subImages;
    subImages.push(res);
    this.setState({
      subImages: subImages
    });
  }
  // 上传图片失败
  onUploadError(errMsg) {
    _mm.errorTips(errMsg);
  }
  // 删除图片
  onImageDelete(e) {
    //删除的下标强转int类型
    let index = parseInt(e.target.getAttribute("index")),
      subImages = this.state.subImages;
    subImages.splice(index, 1);
    this.setState({
      subImages: subImages
    });
  }
  render() {
    return (
      <div id="page-wrapper">
        <PageTitle title={2 == 3 ? "编辑商品" : "添加商品"} />
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
              onCategoryChange={(categoryId, parentCategoryId) =>
                this.onCategoryChange(categoryId, parentCategoryId)
              }
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
                    <i
                      className="fa fa-close"
                      index={index}
                      onClick={e => this.onImageDelete(e)}
                    />
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
