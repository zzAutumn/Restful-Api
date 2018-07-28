<template>
  <Layout>
     <Header class="head-menu" :style="{position: 'fixed', width: '100%'}">
       <Menu mode="horizontal" active-name="1" class="head-menu">
          <div class="layout-logo">
            <img src="../../assets/logo.png">
          </div>
          <div class="layout-nav custom-menu">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
                HOME
            </MenuItem>
            <MenuItem name="2">
              <Icon type="search"></Icon>
                SEARCH
            </MenuItem>
            <MenuItem name="3">
              <Icon type="cube"></Icon>
                MESSAGE
            </MenuItem>
            <MenuItem name="4">
              <Icon type="happy-outline"></Icon>
                ME
            </MenuItem>
            <div class="avatar-badge">
              <Badge count="1">
                <Avatar shape="square" :src="avatarImg" />
              </Badge>
            </div>
          </div>
        </Menu>
     </Header>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  computed: {
    avatarImg() {
      return require('@/assets/avatar.png')
    }
  }
}
</script>

<style scoped>
.head-menu{
  background-color: #B5CAA0;
  font-weight: 900;
}
.custom-menu > li{
  color: #2a47ad !important;
  font-size: 20px;
  margin-right: 30px;
}
.custom-menu > li:hover{
  background-color: antiquewhite;
}
.layout-logo{
  display: inline-block;
  height: 100%;
  margin-right: 20px;
}
.layout-logo > img{
  height: 100%;
}
.layout-nav,.custom-menu{
  display: inline-block;
}
.avatar-badge{
  /* float: right;
  right: 20px; */
  position: absolute;
  right: 20px;
}
</style>
