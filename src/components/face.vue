<template>
  <div id="face" class="center">
	<p><img :src="url" /></p>
    <input type="file" id="file" ref="file" class="inputfile" @change="changepic" accept="image/png, image/jpeg, image/gif, image/jpg" /> 
    <label for="file" class="weui-btn weui-btn_primary">Choose a file</label> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: require("../assets/ming.png")
    }
  },

  methods: {
    changepic() {
        //console.log($ref.file.files[0]);//这里可以获取上传文件的name
        var newsrc=this.$options.methods.getObjectURL(this.$refs.file.files[0]);
        this.url=newsrc;
    },
    //建立一個可存取到該file的url
    getObjectURL(file) {
        var url = null ;
        // 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已
        if (window.createObjectURL!=undefined) { // basic
            url = window.createObjectURL(file) ;
        } else if (window.URL!=undefined) { // mozilla(firefox)
            url = window.URL.createObjectURL(file) ;
        } else if (window.webkitURL!=undefined) { // webkit or chrome
            url = window.webkitURL.createObjectURL(file) ;
        }
        return url ;
    }

    }
	
}

</script>

<style>
  .center{
     text-align:center
  }
  .inputfile {
     opacity: 0;
        }
</style>