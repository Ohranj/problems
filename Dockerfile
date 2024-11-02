FROM ubuntu:22.04

ARG user=alex
ARG work_dir=/var/problems

WORKDIR $work_dir

COPY . .

RUN apt update
RUN apt upgrade -y
RUN apt install -y \ 
    sudo \ 
    curl \ 
    nodejs \ 
    python3 \
    python3-pip

RUN pip install --no-cache-dir -r requirements.txt

RUN useradd -ms /bin/bash $user
RUN usermod -a -G root $user

#Shell in to container with user
USER $user