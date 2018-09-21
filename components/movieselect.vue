<template>
  <div style="margin-top: 20px">
    <el-col :span="12" :offset="2">
      <el-col :span="24" :offset="2">
    <div class="cheklist">
      <el-radio-group v-model="checkedCities" @change="handleCheckedCitiesChange" >
        <el-radio v-for="city in categorys" :label="city.categoryid" :key="city.categoryid" style="margin-top: 10px">{{city.category}}</el-radio>
      </el-radio-group>
    </div>
      </el-col>

    <div class="movcard-list">
      <el-row>
        <el-col :span="6" v-for="item in movlist" :key="item.movieid" :offset="2" >
          <div @click="intoMovieDetail(item)">
          <el-card :body-style="{ padding: '0px' }" style="margin-top: 10px" >
            <img v-bind:src="item.movie.picture" class="image">
            <div style="padding: 10px;">
              <p style="font-size: 16px;max-lines: 2;height: 36px">{{item.movie.moviename}} <span style="color: #9e6fd7">{{item.movie.averating}}</span></p>
              <div class="bottom clearfix">
                <time class="time">{{ item.movie.showyear }}</time>
              </div>
            </div>
          </el-card>
          </div>
        </el-col>
      </el-row>
      <div v-if="isshowbtn">
      <el-button type="primary" round style="margin-left: 47%;margin-top: 10px;margin-bottom: 20px" @click="handleCurrentChange">查看更多</el-button>
      </div>
      <div v-if="!isshowbtn">
        <p style="margin-left: 47%;margin-top: 10px;margin-bottom: 20px">没有更多了</p>
      </div>
    </div>
    </el-col>
  </div>
</template>
<script type="text/javascript">
  import API from '../api'
  export default {
    name: 'Login',
    data () {
      return {
        checkAll: false,
        checkedCities: 1,
        currentotherPage:1,
        categorys: [{
          categoryid:'',
          category:'',
        }],
        isshowbtn: true,
        isIndeterminate: true,
        currentDate: new Date(),
        movlist:[{
          "movcatid": 134,
          "movieid": 110,
          "categoryid": 1,
          "movie": {
            "movieid": 110,
            "moviename": "Braveheart",
            "averating": 4,
            "director": "Mel Gibson",
            "showyear": "1995-05-24T05:00:00.000+0000",
            "picture": "http://image.tmdb.org/t/p/w185/2qAgGeYdLjelOEqjW9FYvPHpplC.jpg",
            "numrating": 67918,
            "nation": null,
            "leadactors": "Mel Gibson,Catherine McCormack,Sophie Marceau,Patrick McGoohan,Angus Macfadyen,Brendan Gleeson,James Robinson,James Cosmo,Sean McGinley,Gerda Stevenson,Mhairi Calvey,Jeanne Marine,Sean Lawlor,Sandy Nelson,Alan Tall,Andrew Weir,Brian Cox,Peter Hanly,Stephen Billington,Tommy Flanagan,Rupert Vansittart,Tam White,Ian Bannen,David O'Hara,Peter Mullan,David Gant,Malcolm Tierney,Martin Murphy,Gerard McSorley,Bernard Horsfall,Richard Leaf,Liam Carney,Ralph Riach,Barry McGovern,John Kavanagh,Alun Armstrong,Julie Austin,Alex Norton,Michael Byrne,William Scott-Masson,Dean Lopata,Donal Gibson,Jimmy Chisholm,John Murtagh,David McKay,Niall O'Brien,Martin Dempsey,Jimmy Keogh,Joe Savino,Mal Whyte,Paul Tucker,Graeme Ford,Greg Jeloudov,Rana Morrison,Jer O'Leary",
            "screenwriter": null,
            "description": "Enraged at the slaughter of Murron, his new bride and childhood love, Scottish warrior William Wallace slays a platoon of the local English lord's soldiers. This leads the village to revolt and, eventually, the entire country to rise up against English rule.",
            "typelist": "Action,Drama,History,War",
            "backpost": "http://image.tmdb.org/t/p/w780/dVZNSiUG8TDzNuaR87NKVTNYhWX.jpg"
          }
        }],
        page: 1,
        size: 21,
      }
    },
    head () {
      return {
        title: '狗眼看电影',
        meta: [
          {hid: 'description', name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no'}
        ]
      }
    },
    mounted:function () {
      this.resqtcatelist()
      this.resqtmovlist()
    },
    methods: {
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        this.movlist = []
        this.resqtmovlist()
      },
      resqtcatelist() {
        let data = {
        }
        API.catelistApi(data).then(res => {
          this.categorys=res.category_tab
        })
      },
      resqtmovlist() {
        let data = {
          categoryid: this.checkedCities,
          page:this.currentotherPage,
          size:21
        }
        API.movlistApi(data).then(res => {
          if (res.movieList.length === 0) {
            this.isshowbtn = false
          } else {
            this.isshowbtn = true
            this.movlist=this.movlist.concat(res.movieList)
          }


        })
      },
      intoMovieDetail (item) {
        let path = "/movie/" + item.movieid;
        this.$router.push({path: path})
      },
      handleCurrentChange () {
        this.currentotherPage = this.currentotherPage + 1
        this.resqtmovlist(this.currentotherPage)
      },
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  .movcard-list {
      margin-top: 80px;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

</style>
