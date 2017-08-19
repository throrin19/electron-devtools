<template>
    <div class="title-bar valign-wrapper">
        <span class="close-btn" v-on:click="closeAction"></span>
        <span class="reduce-btn" v-on:click="reduceAction"></span>
        <span class="size-btn" v-on:click="sizeAction"></span>
    </div>
</template>

<script>
    import { remote } from 'electron';

    export default {
        name    : 'titleBar',
        methods : {
            closeAction() {
                const window = remote.getCurrentWindow();

                window.close();
            },
            reduceAction() {
                const window = remote.getCurrentWindow();

                window.minimize();
            },
            sizeAction() {
                const window = remote.getCurrentWindow();

                if (!window.isMaximized()) {
                    window.maximize();
                } else {
                    window.unmaximize();
                }
            },
        },
    };
</script>

<style lang="scss">
    .title-bar {
        height: 25px;
        -webkit-user-select: none;
        -webkit-app-region: drag;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        padding: 0 5px;

        .close-btn,
        .reduce-btn,
        .size-btn {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin: 0 3px;
            display: inline-block;
        }

        .close-btn {
            background-color: #ff5e5c;
            border: 1px solid #CF4C4B;
        }

        .reduce-btn {
            background-color: #ffbd51;
            border: 1px solid #D59E44;
        }

        .size-btn {
            background-color: #1cc859;
            border: 1px solid #17A549;
        }
    }
</style>
