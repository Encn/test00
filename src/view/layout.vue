<template>
<div>
	<common-header></common-header>
	<router-view></router-view>
</div>
</template>

<script type="text/javascript">
import commonHeader from '../components/header'
export default {
  name: 'layOut',
  data () {
    return {
    }
  },
  components: {
    commonHeader
  }
}
</script>