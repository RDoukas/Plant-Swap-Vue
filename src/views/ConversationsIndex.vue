<template>
  <div class="conversations-index">

  
    <h2>{{ ad.title }}</h2>
    <h4>Posted on: {{ ad.created_at}}</h4>
    <h5>User: {{ad.user_id}}</h5>
    <p>{{ad.description}}</p>
    <img :src="ad.image_url" alt="" width="300"/>

    <br />

    <div>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editAdModal">Edit</button>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#destroyAdModal">Delete</button>
    </div>

  </template>
