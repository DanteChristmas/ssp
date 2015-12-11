# ssp
sullys straps platform

# Setup


git-url = https://github.com/jjs5286/ssp.git

rvm 2.1.5
gem install rails
gem install pg
Create a Postgres user:

su - postgres

Then create a user:

create role myapp with createdb login password 'password1';

rails new myapp --database=postgresql

rake db:setup
