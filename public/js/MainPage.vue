 <template>
    <div >
        <section class="first-block" >
               <!--  v-bind:style="{backgroundImage: 'url(/img/bg1.jpg)'}"-->
            <div class="container" >
                <div class="content" >
                    <h1 data-aos="fade-up" data-aos-duration="1500">
                        <span>{{ $t('hero_title_1') }}</span>
                        {{ $t('hero_title_2') }}
                    </h1>
                    <p class="sub-title" data-aos="fade-up" data-aos-duration="1500">
                        {{ $t('hero_subtitle_1') }} <span>{{ $t('hero_subtitle_2') }}</span>
                    </p>
                    <div class="adv-items">
                        <div class="item">
                            <img loading="lazy" class="ribbon" :src="'/img/ribbon.png'" alt="">
                            <img loading="lazy" :width="15" :height="15" class="adv-img" :src="'/img/adv1.png'" alt="">
                            <p class="title">
                                <i18n path="hero_adv_1">
                                    <br place="break">
                                </i18n>
                            </p>
                            <p class="subtitle">
                                {{ $t('hero_adv_desc_1') }}
                            </p>
                        </div>
                        <div class="item">
                            <img loading="lazy" class="ribbon" :src="'/img/ribbon.png'" alt="">
                            <img loading="lazy" class="adv-img" :src="'/img/adv2.png'" alt="">
                            <p class="title">
                                <i18n path="hero_adv_2">
                                    <br place="break">
                                </i18n>
                            </p>
                            <p class="subtitle">
                                {{ $t('hero_adv_desc_2') }}
                            </p>
                        </div>
                        <div class="item">
                            <img loading="lazy" class="ribbon" :src="'/img/ribbon.png'" alt="">
                            <img loading="lazy" class="adv-img" :src="'/img/adv3.png'" alt="">
                            <p class="title">
                                <i18n path="hero_adv_3">
                                    <br place="break">
                                </i18n>
                            </p>
                            <p class="subtitle">
                                <i18n path="hero_adv_desc_3">
                                    <br place="break">
                                </i18n>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="form-block ">
                    <div class="inner contact-form" >

                        <img   loading="lazy"  src="/img/ribbon.png" alt="" class="ribbon contact-img">
                        <div class="contact-title" >
                            <h3 class="contact-head" >
                                {{ $t('main_contact') }}
                            </h3>
                            <img height="65px" class="contact-map"  src="/img/map.png" alt="">
                            <span class="btn-blick"></span>
                        </div>
                        <div class="item-block">
                            <div class="item-dek">
                        <div class="contact-phone">
                            <p><span class="city"> {{ $t('main_contact_dnipro') }}:</span></p>
                            <a style="color:white" href="tel:(096) 812-92-56">(096) 812-92-56</a>
                        </div>
                        <div class="contact-phone">
                            <p><span  class="city">{{ $t('main_contact_kyiv') }}:</span></p>
                            <a style="color:white" href="tel:(097) 159-76-72">(097) 159-76-72</a>
                        </div>
                        <div class="contact-phone">
                            <p><span  class="city">{{ $t('main_contact_odesa') }}:</span></p>
                            <a style="color:white" href="tel:(095) 549-60-62">(095) 549-60-62</a>
                        </div>
                            </div>
                            <div class="item-dek">
                        <div class="contact-phone" >
                            <p ><span class="city">{{ $t('main_contact_mykolaiv') }}:</span></p>
                            <a style="color:white" href="tel:(067) 631-38-23">(067) 631-38-23</a>
                        </div>
                       <div class="contact-phone">
                            <p><span class="city">{{ $t('main_contact_kharkiv') }}:</span></p>
                           <a style="color:white" href="tel:(095) 599-71-40">(095) 599-71-40</a>
                        </div>
                        <div class="contact-phone">
                            <p><span class="city">{{ $t('main_contact_rivne') }}:</span></p>
                            <a style="color:white" href="tel:(067) 382-60-86">(067) 382-60-86</a>
                        </div>
                            </div>
                        </div>
                        <p class="call" > {{ $t('main_contact_2') }}</p>
                    </div>
                    <!-- <div class="inner">
                         <p class="title">
                             <i18n path="download_price_title2">
                                 <br place="break">
                             </i18n>
                         </p>
                         <div class="img-block">
                             <img class="catalogue" :src="'/img/form_slider/1.jpg'" alt="">
                         </div>
                         <form action="" class="download-price-form blinds" @submit="sendPriceBlinds">
                             <input type="text" id="download-price-form-blinds-name" name="name" placeholder="Ваше ім'я" required>
                             <input type="tel" id="download-price-form-blinds-phone" name="phone" placeholder="+38 (___) ___-__-__" required>
                             <input type="hidden" id="download-price-form-blinds-type" name="type" value="blinds">

                             <button class="btn-o">
                                 <span class="btn-blick"></span>
                                 <img :src="'/img/download.png'" alt="">
                                 {{ $t('download_price') }}
                             </button>
                             <p class="size">{{ $t('download_size') }}</p>
                         </form>
                     </div>
                     <div class="inner">
                         <p class="title">
                             <i18n path="download_price_title3">
                                 <br place="break">
                             </i18n>
                         </p>
                         <div class="img-block">
                             <img class="catalogue" :src="'/img/download_catalog.jpg'" alt="">
                         </div>
                         <form action="" class="download-price-form blinds" @submit="sendProductCatalog">
                             <input type="text" id="download-price-form-catalog-name" name="name" placeholder="Ваше ім'я" required>
                             <input type="tel" id="download-price-form-catalog-phone" name="phone" placeholder="+38 (___) ___-__-__" required>
                             <input type="hidden" id="download-price-form-catalog-type" name="type" value="catalog">

                             <button class="btn-o">
                                 <span class="btn-blick"></span>
                                 <img :src="'/img/download.png'" alt="">
                                 {{ $t('download_price') }}
                             </button>
                             <p class="size">{{ $t('download_size') }}</p>
                         </form>
                     </div>-->
                </div>
            </div>
        </section>

        <section class="product-adv">
            <div class="container">
                <h2>
                    {{ $t('section_adv_title') }}
                </h2>
                <p class="heading-subtitle">
                    {{ $t('section_adv_subtitle') }}
                </p>
                <div class="inner">
                    <div class="item lazybg"  data-lazybg="/img/prod-adv/adv-1.jpg.webp">
                        <p class="title">
                            {{ $t('section_adv_item_1_title') }}
                        </p>
                        <p class="second">
                            {{ $t('section_adv_item_1_desc') }}
                        </p>
                    </div>
                    <div class="item lazybg"  data-lazybg="/img/prod-adv/adv-2.jpg.webp">
                        <p class="title">
                            {{ $t('section_adv_item_2_title') }}
                        </p>
                        <p class="second">
                            {{ $t('section_adv_item_2_desc') }}
                        </p>
                    </div>
                    <div class="item lazybg"  data-lazybg="/img/prod-adv/adv-4.jpg.webp">
                        <!-- v-bind:style="{backgroundImage: 'url(/img/prod-adv/adv-4.jpg.webp)'}">-->
                        <p class="title">
                            {{ $t('section_adv_item_3_title') }}
                        </p>
                        <p class="second">
                            {{ $t('section_adv_item_3_desc') }}
                        </p>
                    </div>
                    <div class="item wide lazybg"  data-lazybg="/img/prod-adv/adv-5.jpg.webp">
                        <p class="title">
                            {{ $t('section_adv_item_4_title') }}
                        </p>
                        <p class="second">
                            {{ $t('section_adv_item_4_desc') }}
                        </p>
                    </div>
                    <div class="item wide  lazybg"  data-lazybg="/img/prod-adv/bg2.jpg.webp">

                        <p class="title">
                            {{ $t('section_adv_item_5_title') }}
                        </p>
                        <p class="second">
                            {{ $t('section_adv_item_5_desc') }}
                        </p>
                        <img loading="lazy" :src="'/img/prod-adv/adv-3.png'" alt="">
                    </div>
                    <div class="item  lazybg"  data-lazybg="/img/prod-adv/adv-6.jpg.webp">
                        <p class="title">
                            {{ $t('section_adv_item_6_title') }}
                        </p>
                        <p class="second">
                            {{ $t('section_adv_item_6_desc') }}
                        </p>
                    </div>
                    <div class="item lazybg"  data-lazybg="/img/prod-adv/adv-7.jpg.webp">
                        <p class="title">
                            {{ $t('section_adv_item_7_title') }}
                        </p>
                        <p class="second">
                            {{ $t('section_adv_item_7_desc') }}
                        </p>
                    </div>
                    <div class="item lazybg"  data-lazybg="/img/prod-adv/bg1.jpg.webp">
                        <p class="title">
                            {{ $t('section_adv_item_8_title') }}
                        </p>
                        <p class="second">
                            {{ $t('section_adv_item_8_desc') }}
                        </p>
                        <img loading="lazy" :src="'/img/prod-adv/adv-8.png.webp'" alt="">
                    </div>
                </div>
            </div>
        </section>

        <section class="catalogue-main-page">
            <div class="container">
                <h2 data-aos="fade-up" data-aos-duration="1500">
                    {{ $t('section_products_title') }}
                </h2>
                <div class="inner">
                    <div class="left">
                        <div class="filters">
                            <div class="all-one-place">
                                <p class="title">
                                    {{ $t('section_products_all_at_same_place') }}
                                </p>
                            </div>
                            <ul>
                                <li>
                                    <a :href="'/'+$i18n.locale+roller_shutters[$i18n.locale]">
                                        {{ $t('category_1') }}
                                    </a>
                                </li>
                                <li>
                                    <a :href="'/'+$i18n.locale+rullonnye_reshetki[$i18n.locale]">
                                        {{ $t('category_2') }}
                                    </a>
                                </li>
                                <li>
                                    <a :href="'/'+$i18n.locale+'/shrutters-individual'">
                                        {{ $t('category_3') }}
                                    </a>
                                </li>
                                <li>
                                    <a :href="'/'+$i18n.locale+rullonnye_vorota[$i18n.locale]">
                                        {{ $t('category_4') }}
                                    </a>
                                </li>
                                <li>
                                    <a :href="'/'+$i18n.locale+'/product-parts'">
                                        {{ $t('category_10') }}
                                    </a>
                                </li>
                                <li>
                                    <a :href="'/'+$i18n.locale+roletni_vorota[$i18n.locale]">
                                        {{ $t('rol-vorota') }}
                                    </a>
                                </li>
                                <li>
                                    <a :href="'/'+$i18n.locale+'/sliding-gate'">
                                        {{ $t('category_6') }}
                                    </a>
                                </li>
                                <li class="disabled">
                                    <a href="javascript:void(0)">
                                        {{ $t('category_7') }}
                                    </a>
                                </li>
                                <li>
                                    <a :href="'/'+$i18n.locale+'/zhalyuzi'">
                                        {{ $t('category_8') }}
                                    </a>
                                </li>
                                <li class="disabled">
                                    <a href="javascript:void(0)">
                                        {{ $t('category_9') }}
                                    </a>
                                </li>
                                <li>
                                    <a :href="'/'+$i18n.locale+'/sop-product'">
                                        {{ $t('category_11') }}
                                    </a>
                                </li>
                                <li>
                                    <a :href="'/'+$i18n.locale+'/avtomatika-desc'">
                                        {{ $t('category_12') }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <v-measurer></v-measurer>
                    </div>
                    <div class="right">
                        <v-top-block></v-top-block>
                        <div class="product-items">
                            <div v-for="(item, key) in products" class="item" :key="key">
<!--                                <div class="tags">-->
<!--                                    <span class="hit">Хит продаж</span>-->
<!--                                    <span class="discount">Скидка -5%</span>-->
<!--                                </div>-->
                                <div class="img">
                                    <a :href="'/'+$i18n.locale+'/product/'+item.id">
                                        <img :width="140" :height="140" loading="lazy" :src="item.picture[0]" alt="">
                                    </a>
                                </div>
                                <p class="status available">
                                    <span></span>
                                    {{ $t('available') }}
                                </p>
                                <a v-if="$i18n.locale=='ua'" :href="'/'+$i18n.locale+'/product/'+item.id" class="product-name">

                                    {{ item.title_ua }}
                                </a>
                                <a v-if="$i18n.locale=='ru'" :href="'/'+$i18n.locale+'/product/'+item.id" class="product-name">

                                    {{ item.title }}
                                </a>
                                <a v-if="$i18n.locale=='en'" :href="'/'+$i18n.locale+'/product/'+item.id" class="product-name">

                                    {{ item.title_en }}
                                </a>

                                <div class="price-block">
                                    <span class="title">{{ $t('price') }}:</span>
                                    <span class="price">{{ item.price }} <i>₴</i></span>
                                </div>
                                <div class="btns-block">
                                    <a href="javascript:void(0)" @click="addToCart(item)" class="btn-o">
                                        <span class="btn-blick"></span>
                                        {{ $t('add_to_basket') }}
                                    </a>
                                    <a :href="'/'+$i18n.locale+'/product/'+item.id" class="more">
                                        {{ $t('news_more') }}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="catalogue-btn" data-aos="fade-up" data-aos-duration="1500">
                            <a :href="'/'+$i18n.locale+'/products'" class="btn-o">
                                <span class="btn-blick"></span>
                                <img width="15" height="15" loading="lazy" :src="'/img/cat/adv5.png'" alt="">
                                {{ $t('proceed_to_catalog') }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="container block-margin">

            <h2 data-aos="fade-up" data-aos-duration="1500">{{ $t('faq') }}</h2>

            <div class="popular-questions">
                <div itemscope="" itemtype="https://schema.org/FAQPage">
                    <ul   class="popular-questions__accordion">
                        <li id="akkone" @click="accord('one')" class="popular-questions__accordion-item">
                            <div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
                                <div class="popular-questions__accordion-title" style="display: flex;" itemprop="name"><p class="img faq_img_div"><img loading="lazy" class="faq_img" :width="10" :height="10" :src="'/img/check.png'" alt=""></p><div> {{ $t('faq_Q_1') }}</div></div>
                                <div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                                    <div id="one" class="popular-questions__accordion-panel faq_hidden" itemprop="text">{{ $t('faq_A_1') }}</div>
                                </div>
                            </div>
                        </li>
                        <li id="akktwo" @click="accord('two')" class="popular-questions__accordion-item">

                            <div  itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
                                <div class="popular-questions__accordion-title" style="display: flex;" itemprop="name"><p class="img faq_img_div"><img loading="lazy" class="faq_img" :width="10" :height="10" :src="'/img/check.png'" alt=""></p><div> {{ $t('faq_Q_2') }}</div></div>
                                <div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                                    <div id="two" class="popular-questions__accordion-panel faq_hidden" itemprop="text" >{{ $t('faq_A_2') }}</div>
                                </div>
                            </div>

                        </li>
                        <li id="akkthree" @click="accord('three')"  class="popular-questions__accordion-item">
                            <div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
                                <div class="popular-questions__accordion-title" style="display: flex;" itemprop="name"><p class="img faq_img_div"><img loading="lazy" class="faq_img" :width="10" :height="10" :src="'/img/check.png'" alt=""></p><div> {{ $t('faq_Q_3') }}</div></div>
                                <div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                                    <div id="three" class="popular-questions__accordion-panel faq_hidden" itemprop="text">{{ $t('faq_A_3') }}</div>
                                </div>
                            </div>
                        </li>
                        <li id="akkfour" @click="accord('four')"  class="popular-questions__accordion-item">
                            <div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
                                <div class="popular-questions__accordion-title" style="display: flex;" itemprop="name"><p class="img faq_img_div"><img loading="lazy" class="faq_img" :width="10" :height="10" :src="'/img/check.png'" alt=""></p><div> {{ $t('faq_Q_4') }}</div></div>
                                <div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                                    <div id="four" class="popular-questions__accordion-panel faq_hidden" itemprop="text">{{ $t('faq_A_4') }}</div>
                                </div>
                            </div>
                        </li>
                        <li id="akkfive" @click="accord('five')" class="popular-questions__accordion-item">
                            <div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
                                <div class="popular-questions__accordion-title" style="display: flex;" itemprop="name"><p class="img faq_img_div"><img loading="lazy" class="faq_img" :width="10" :height="10" :src="'/img/check.png'" alt=""></p><div> {{ $t('faq_Q_5') }}</div></div>
                                <div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                                    <div id="five" class="popular-questions__accordion-panel faq_hidden" itemprop="text">{{ $t('faq_A_5') }}</div>
                                </div>
                            </div>
                        </li>
                        <li id="akksix" @click="accord('six')" class="popular-questions__accordion-item">
                            <div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
                                <div class="popular-questions__accordion-title" style="display: flex;" itemprop="name"><p class="img faq_img_div"><img loading="lazy" class="faq_img" :width="10" :height="10" :src="'/img/check.png'" alt=""></p><div> {{ $t('faq_Q_6') }}</div></div>
                                <div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                                    <div id="six" class="popular-questions__accordion-panel faq_hidden" itemprop="text">{{ $t('faq_A_6') }}</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="popular-questions__form">
                   <!-- <img class="popular-questions__img" src="/img/quest.webp">-->
                        <div class="popular-questions__form-title">{{ $t('faq_qua') }}</div>

                    <p>{{ $t('faq_desc1') }}</p>
                    <p>{{ $t('faq_desc2') }}</p>
                    <a :href="'/'+$i18n.locale+'/articles'" class="btn-o">
                        <span class="btn-blick"></span>

                        {{ $t('faq') }}

                    </a>
                </div>
            </div> </div>
        <v-download-catalog></v-download-catalog>

        <section class="portfolio">
            <div class="container">
                <h2 data-aos="fade-up" data-aos-duration="1500">{{ $t('gallery_section_title') }}</h2>
                <p class="subtitle">{{ $t('gallery_section_title_2') }}</p>
                <div id="animated-thumbnails2" class="portfolio-items">
                    <a v-for="(item, key) in portfolio"
                       :href="'/'+$i18n.locale+'/portfolio/'+item.slug"
                       class="item"
                       :key="item.id">
                        <img loading="lazy" class="img" :src="'/storage/'+item.img" ></img>
                        <p v-if="$i18n.locale=='ua'">{{ item.title_ua }}</p>
                        <p v-if="$i18n.locale=='ru'">{{ item.title_ru }}</p>
                        <p v-if="$i18n.locale=='en'">{{ item.title_en }}</p>
                    </a>
                </div>
                <div class="portfolio-btn" data-aos="fade-up" data-aos-duration="1500">
                    <a :href="$i18n.locale+'/portfolio'" class="btn-o">
                        <span class="btn-blick"></span>
                        <img :width="15" :height="15" loading="lazy" :src="'/img/adv1.png'" alt="">
                        {{ $t('gallery_section_title_btn') }}
                    </a>
                </div>
            </div>
        </section>

        <v-certificates></v-certificates>

        <v-callback></v-callback>
        <section  class="main-description">

        <div class="container">

            <h2 data-aos="fade-up" data-aos-duration="1500" >{{$t('main_seo_title_1')}}</h2>
             <p class="subtitle">{{$t('main_seo_sub_1')}}</p>
            <p class="subtitle">   <ol style="list-style:disc" v-html="$t('main_seo_desc_1')">

            </ol>
            </p>

                <h2 data-aos="fade-up" data-aos-duration="1500">{{$t('main_seo_title_2')}}</h2>
            <p class="subtitle">{{$t('main_seo_sub_2')}}</p>
            <ol style="list-style:octal" v-html="$t('main_seo_desc_2')">
                 </ol>
            <h2 data-aos="fade-up" data-aos-duration="1500" >{{$t('main_seo_title_3')}}  </h2>
         <p class="subtitle">{{$t('main_seo_sub_3')}}</p>

            <h2 data-aos="fade-up" data-aos-duration="1500" >{{$t('main_seo_title_4')}}</h2>
            <p class="subtitle">{{$t('main_seo_sub_4')}}</p>
            <ol style="list-style:octal"  v-html="$t('main_seo_desc_4')">
               </ol>
            <h2 data-aos="fade-up" data-aos-duration="1500" >{{$t('main_seo_title_5')}}</h2>
            <ol style="list-style:disc" v-html="$t('main_seo_desc_5')">
                </ol>

        </div>
        </section>
        <v-map></v-map>
    </div>
</template>

<script>

export default {
    data: () => ({
        products: [],
        portfolio: '',
        priceShrutters: '',
        priceBlinds: '',
        productCatalog: '',
        itemAkk: '',
        roller_shutters: {
            ua:'/protective-roller-shutters',
            en:'/shutters-desc',
            ru:'/zaschitnye-rolety-na-okna-i-dveri'
        },
        rullonnye_reshetki:{
            ua:'/blinds-desc',
            en:'/blinds-desc',
            ru:'/rulonnye-reshetki'
        },
        roletni_vorota:{
            ua:'/roletni-vorota',
            ru:'/roletnye-vorota',
            en:'/roletni-vorota'
        },
        rullonnye_vorota:{
            ua:'/shutters-gates-desc',
            ru:'/rylonnye-vorota',
            en:'/shutters-gates-desc',
        }
    }),
    mounted() {
        this.getProducts()
        this.getPortfolio()
        window.addEventListener('scroll', this.lazybg,{once:true});
        window.addEventListener('wheel', this.lazybg, {once:true});
    },
    methods: {
        getProducts() {
            axios.get('/api/fetch-products')
                .then(res => {
                    this.products = res.data
                })
        },
        getPortfolio() {
            axios.get('/api/fetch-all-portfolio')
                .then(res => {
                    this.portfolio = res.data
                })
        },
        addToCart(item) {
            this.$store.dispatch('addProductToCart', {
                product: item,
                quantity: 1
            })
            $('#basket-container').toggleClass('show')
            $('#basket-container .inner').toggleClass('show-inner')
        },
        sendPriceShrutters() {
            event.preventDefault();
            axios.get('/api/fetch-files')
                .then(res => {
                    this.priceShrutters = res.data['price_shrutters']
                    var link = document.createElement('a');
                    link.href = '/storage/'+this.priceShrutters;
                    link.download = this.priceShrutters;
                    link.dispatchEvent(new MouseEvent('click'));
                })
            $('.dealer-form.dealer-form-sent').addClass('show')
            $('.dealer-form.dealer-form-sent .inner').addClass('move')

            var formData = {
                name: $("#download-price-form-shutters-name").val(),
                phone: $("#download-price-form-shutters-phone").val(),
                type: $("#download-price-form-shutters-type").val(),
            };
            axios.post('/add_q', formData)

            $("#download-price-form-shutters-name").val('');
            $("#download-price-form-shutters-phone").val('');

        },
        lazybg(event){
            var lazyObjects = document.querySelectorAll(".lazybg");
            lazyObjects.forEach(function(lazyObject) {

                if (!(lazyObject.dataset.lazybg == '')) {
                    let bgsrc = lazyObject.dataset.lazybg;
                    console.log(bgsrc)
                    lazyObject.style.backgroundImage = 'url(' + bgsrc + ')';
                    lazyObject.classList.remove("lazybg");
                    lazyObject.dataset.lazybg = '';
                }


            })
        },

        accord(itemAkk){
            // if($("#akk"+itemAkk).hasClass('minuse')){
            //     $('.popular-questions__accordion-panel').each(function(){
            //         $(this).css("display","none");
            //     })
            //
            //     $('.popular-questions__accordion-item').each(function(){
            //         $(this).removeClass('minuse');
            //     })
            // }else{
            //     $('.popular-questions__accordion-panel').each(function(){
            //         $(this).css("display","none");
            //     })
            //
            //     $('.popular-questions__accordion-item').each(function(){
            //         $(this).removeClass('minuse');
            //
            //     })
            //     $("#"+itemAkk).css("display","block");
                $("#akk"+itemAkk).toggleClass('minuse')
                $("#"+itemAkk).toggleClass('faq_active')
            //}



        },
        sendPriceBlinds() {
            event.preventDefault();
            axios.get('/api/fetch-files')
                .then(res => {
                    this.priceBlinds = res.data['price_blinds']
                    var link = document.createElement('a');
                    link.href = '/storage/'+this.priceBlinds;
                    link.download = this.priceBlinds;
                    link.dispatchEvent(new MouseEvent('click'));
                })
            $('.dealer-form.dealer-form-sent').addClass('show')
            $('.dealer-form.dealer-form-sent .inner').addClass('move')

            var formData2 = {
                name: $("#download-price-form-blinds-name").val(),
                phone: $("#download-price-form-blinds-phone").val(),
                type: $("#download-price-form-blinds-type").val(),
            };
            axios.post('/add_q', formData2)

            $("#download-price-form-blinds-name").val('');
            $("#download-price-form-blinds-phone").val('');
        },
        sendProductCatalog() {
            event.preventDefault();
            axios.get('/api/fetch-files')
                .then(res => {
                    this.productCatalog = res.data['product_catalog']
                    var link = document.createElement('a');
                    link.href = '/storage/'+this.productCatalog;
                    link.download = this.productCatalog;
                    link.dispatchEvent(new MouseEvent('click'));
                })
            $('.dealer-form.dealer-form-sent').addClass('show')
            $('.dealer-form.dealer-form-sent .inner').addClass('move')

            var formData3 = {
                name: $("#download-price-form-catalog-name").val(),
                phone: $("#download-price-form-catalog-phone").val(),
                type: $("#download-price-form-catalog-type").val(),
            };
            axios.post('/add_q', formData3)

            $("#download-price-form-catalog-name").val('');
            $("#download-price-form-catalog-phone").val('');
        }
    }
}
</script>
