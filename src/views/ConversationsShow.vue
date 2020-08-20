<template>
  <div class="conversations-show">
    <div class="container-fluid ">
      <div class="comments">
        <h3 class="title custom mb25">{{ ad.title }}</h3>
        <ul class="comments-list media-list">
          <li class="media">
            <div class="comment">
              <div class="media-left"></div>
              <!-- End .media-left -->
              <div class="media-body">
                <h4 class="media-heading">
                  {{ ad.username
                  }}<span class="comment-date">{{
                    conversation.created_at
                  }}</span>
                </h4>

                <p>
                  Enim ad sapiente itaque illo laudantium tempore rem iure
                  accusantium atque. Qui facilis quibusdam laborum. Nobis animi
                  provident ipsum quidem eveniet voluptate expedita veniam porro
                  quod a. Temporibus, voluptates provident.Ex deserunt error,
                  culpa voluptatibus.
                </p>
              </div>
              <!-- End .media-body -->
            </div>
            <!-- End .comment -->
            <ul>
              <li class="media">
                <div class="comment">
                  <div class="media-left">
                    <img
                      class="media-object img-circle"
                      src="assets/images/blog/users/user2.jpg"
                      alt="User name"
                    />
                  </div>
                  <!-- End .media-left -->
                  <div class="media-body">
                    <h4 class="media-heading">
                      Desmond Mason<span class="comment-date">32 min ago</span>
                    </h4>

                    <p>
                      Ex deserunt error, culpa voluptatibus, explicabo commodi
                      id fugiat ipsa. Doloremque ipsum sapiente laudantium
                      similique repellat, tempora voluptatem. Sunt tempore
                      eligendi inventore molestiae delectus harum quasi
                      consequuntur nisi repellendus saepe?
                    </p>
                  </div>
                  <!-- End .media-body -->
                </div>
                <!-- End .comment -->
                <ul>
                  <li class="media">
                    <div class="comment">
                      <div class="media-left">
                        <img
                          class="media-object img-circle"
                          src="assets/images/blog/users/user3.jpg"
                          alt="User name"
                        />
                      </div>
                      <!-- End .media-left -->
                      <div class="media-body">
                        <h4 class="media-heading">
                          Ben Wallece<span class="comment-date"
                            >21 min ago</span
                          >
                        </h4>

                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Pariatur, iure. Minima alias nam magni
                          distinctio voluptatum dolorum nostrum, iusto magnam
                          ullam iure pariatur, qui dolore maiores iste, unde
                          vitae. Dolores.
                        </p>
                      </div>
                      <!-- End .media-body -->
                    </div>
                    <!-- End .comment -->
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="media">
            <div class="comment">
              <div class="media-left">
                <img
                  class="media-object img-circle"
                  src="assets/images/blog/users/user4.jpg"
                  alt="User name"
                />
              </div>
              <!-- End .media-left -->
              <div class="media-body">
                <h4 class="media-heading">
                  Steve Kerr<span class="comment-date">2 hours ago</span>
                </h4>

                <p>
                  Minima quae unde quam totam enim. Corporis debitis, tenetur
                  illo deleniti totam perferendis doloribus. Laboriosam aperiam
                  provident debitis earum fuga quibusdam odit unde vel hic
                  commodi dolor, minus, nobis aliquid.
                </p>
              </div>
              <!-- End .media-body -->
            </div>
            <!-- End .comment -->
          </li>
        </ul>
      </div>
      <!-- End .comments -->

      <div id="respond" class="comment-respond">
        <h3 class="title custom mb25">Send a Reply</h3>
        <form action="#" method="post">
          <div class="row">
            <div class="col-sm-6">
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                required
              />
            </div>
            <!-- End .col-sm-6 -->
            <div class="col-sm-6">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                required
              />
            </div>
            <!-- End .col-sm-6 -->
          </div>
          <!-- End .row -->
          <input
            type="url"
            class="form-control"
            placeholder="Website"
            required
          />
          <textarea
            class="form-control"
            rows="6"
            placeholder="Add Your Comment"
            required
          ></textarea>
          <input
            type="submit"
            class="btn btn-custom min-width"
            value="Send Reply"
          />
        </form>
      </div>
      <!-- End #respond -->
    </div>

    <!-- <button v-on:click="destroyConvo()">
      Delete Conversation
    </button>
    <h4>{{ conversation.ad_title }}</h4>
    <div v-for="message in conversation.messages">
      <h5>Plant Parent: {{ message.username }}</h5>
      <span>Date sent: {{ relativeTime(message.created_at) }}</span>
      <p>{{ message.body }}</p>
    </div>
    <div v-on:submit.prevent="createMessage()">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      <label>Send Message:</label>
      <textarea
        :placeholder="`Reply to ${partner.username}`"
        v-model="newMessage"
      ></textarea>
      <input type="submit" value="SEND MESSAGE" />
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  data: function() {
    return {
      errors: [],
      conversation: {
        messages: [],
      },
      partner: {},
      newMessage: "",
    };
  },
  created: function() {
    axios
      .get(`/api/conversations/${this.$route.params.id}`)
      .then((response) => {
        this.conversation = response.data;
        this.partner = response.data.partner;
        this.messages = response.data.messages;
        console.log(response.data);
      });
  },
  methods: {
    createMessage: function() {
      var params = {
        body: this.newMessage,
        conversation_id: this.conversation.id,
      };
      axios
        .post("/api/messages", params)
        .then((response) => {
          this.messages.push(response.data);
          this.newMessage = "";
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    destroyConvo: function() {
      if (confirm("Are you sure you want to delete this conversation?")) {
        axios
          .delete(`/api/conversations/${this.conversation.id}`)
          .then((response) => {
            console.log(response.data);
            this.$router.push("/conversations");
          });
      }
    },
    relativeTime: function(time) {
      return moment(time)
        .startOf("hour")
        .fromNow();
    },
  },
};
</script>
