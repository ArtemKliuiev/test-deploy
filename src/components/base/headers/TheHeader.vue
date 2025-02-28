<script setup lang="ts">
import BaseSvg from '@/components/base/svg/BaseSvg.vue';
console.log(import.meta.env.BASE_URL)
</script>

<template>
<header class="header">
    <div class="header__line">
        <div class="header__logo">SHOPPE</div>

        <div class="header__main">
            <ul class="header__list">
                <li class="header__list-item header__list-shope header__list-item_active">
                    Shope

                    <div class="header__shop">
                        <div class="header__shop-column">
                            <p class="header__shop-title">SHOP TYPES</p>

                            <ul class="header__shop-list">
                                <li class="header__shop-list-item">Shop full width</li>

                                <li class="header__shop-list-item">Shop With sidebar</li>

                                <li class="header__shop-list-item">Shop category</li>

                                <li class="header__shop-list-item">Shop carousel</li>

                                <li class="header__shop-list-item">Masonry grid</li>
                            </ul>
                        </div>

                        <div class="header__shop-column">
                            <p class="header__shop-title">SINGLE PRODUCT</p>

                            <ul class="header__shop-list">
                                <li class="header__shop-list-item">Standard product</li>

                                <li class="header__shop-list-item">Variable product</li>

                                <li class="header__shop-list-item">On sale product</li>

                                <li class="header__shop-list-item">Out of stock product</li>

                                <li class="header__shop-list-item">New! Product</li>
                            </ul>
                        </div>

                        <div class="header__shop-column">
                            <p class="header__shop-title">SINGLE PRODUCT</p>

                            <ul class="header__shop-list">
                                <li class="header__shop-list-item">Cart</li>

                                <li class="header__shop-list-item">Checkout</li>

                                <li class="header__shop-list-item">My account</li>

                                <li class="header__shop-list-item">Wishlist</li>

                                <li class="header__shop-list-item">Order tracking</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="header__list-item">
                    Blog
                </li>
                <li class="header__list-item">
                    Our Story
                </li>
            </ul>

            <div class="header__buttons">
                <div class="header__btn header__btn-search">
                    <BaseSvg class="header__btn-icon" id="search"/>
                </div>

                <div class="header__btn header__btn-basket">
                    <BaseSvg class="header__btn-icon" id="basket"/>
                </div>

                <div class="header__btn header__btn-person">
                    <BaseSvg class="header__btn-icon" id="person"/>
                </div>
            </div>
        </div>
    </div>
</header>
</template>

<style scoped lang="scss">
.header{
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--background);
    padding: 45px 20px 0 ;

    &__line {
        position: relative;
        display: flex;
        justify-content: space-between;
        padding-bottom: 7px;
        border-bottom: 1px solid var(--gray);
        margin: 0 auto;
        max-width: 1248px;
    }
    
    &__logo {
        font-family: Allerta Stencil, sans-serif;
        font-size: 35px;

        &::first-letter{
            color: var(--accent);
        }
    }
    
    &__main {
        display: flex;
        width: 100%;
        max-width: 504px;
    }
    
    &__list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 319px;
        position: relative;
        padding-right: 50px;

        &::before{
            content: '';
            position: absolute;
            right: 0;
            top: 16px;
            height: 17px;
            width: 1px;
            background-color: var(--text-second);
        }

        &-item {
            transition: color 0.2s;
            position: relative;

            &:hover{
                color: var(--text-second);
                cursor: pointer;
                user-select: none;
            }

            &_active{
                &::before{
                    content: "";
                    position: absolute;
                    bottom: -23px;
                    z-index: 2;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: var(--text);
                }
            }
        }

        &-shope{
            &:hover{
                .header__shop{
                    opacity: 1;
                    pointer-events: unset;
                }
            }

            &::after{
                content: '';
                position: absolute;
                width: 100%;
                left: 0;
                top: 0;
                height: 50px;
            }
        }
    }
    
    &__buttons{
        padding-left: 47px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-grow: 1;
    }

    &__btn {
        flex-shrink: 0;

        &-icon {
            fill: var(--text) ;
            transition: fill 0.2s;

            &:hover{
                fill: var(--text-second) ;
                cursor: pointer;
                user-select: none;
            }
        }

        &-search {
            width: 19px;
            height: 19px;
        }

        &-basket {
            width: 21px;
            height: 21px;
        }

        &-person {
            width: 20px;
            height: 20px;
        }
    }

    &__shop{
        position: absolute;
        pointer-events: none;
        top: 46px;
        right: 0;
        transform: translateX(50%);
        background-color: var(--background);
        border: 1px solid var(--gray);
        display: flex;
        padding: 30px 0;
        opacity: 0;


        &-column {
            position: relative;
            width: 205px;
            padding-left: 30px;
            font-size: 14px;
            line-height: 22px;

            &::before{
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                height: 100%;
                width: 1px;
                background-color: var(--gray);
            }
        }
    
        &-title {
            margin-bottom: 15px;
            color: var(--text);
        }

        &-list {
            color: var(--text-second);

            &-item {
                margin-bottom: 10px;
                transition: color 0.2s;

                &:hover{
                    color: var(--text);
                }
            }
        }
    }
}
</style>