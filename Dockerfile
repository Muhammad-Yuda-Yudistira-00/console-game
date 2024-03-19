FROM php:8.1-fpm

COPY composer.* /var/www/console-game/

WORKDIR /var/www/console-game

RUN apt update && apt install -y \
build-essential \
libmcrypt-dev \
mariadb-client \
libpng-dev \
libjpeg62-turbo-dev \
libfreetype6-dev \
locales \
jpegoptim optipng pngquant gifsicle \
vim \
unzip \
git \
curl \
libzip-dev \
zip \
npm

RUN apt clean && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install pdo pdo_mysql gd zip

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

copy . .

COPY --chown=www:www . .

USER www

EXPOSE 9000

CMD ["php-fpm"]