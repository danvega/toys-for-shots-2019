<template>
  <section id="banner">
    <div class="l-snow-particles" id="js-snow-particles"></div>
    <div class="container tahsan">
      <div class="row">
        <div class="col-md-5 mx-auto text-center">
          <div class="slider_txt">
            <h1>Merry Christmas</h1>
            <h3>Toys for Shots</h3>
            <p>Toys for Shots is an annual fundraiser / holiday party. The primary goal of this very special event is to collect as many new, unwrapped toys as possible for The Marine Toys for Tots Foundation. Your gift will spread so much joy to a deserving Cleveland area child this Christmas.</p>
            <a href="#" data-toggle="modal" data-target="#exampleModal">Join the Party</a>
            <div class="col-12">
              <div class="row">
                <!-- Modal -->
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"></h5>
                        <a href="#" class="close" data-dismiss="modal" aria-label="Close">
                          <i class="fa fa-close"></i>
                        </a>
                      </div>
                      <div class="modal-body">
                        <div class="heading text-center col-12">
                          <div class="col-6 mx-auto">
                            <h2>Join The Party</h2>
                          </div>
                        </div>
                        <form>
                          <div class="col-12">
                            <div class="row">
                              <div class="col-6">
                                <div class="form-group">
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Your Name"
                                  />
                                </div>
                              </div>
                              <div class="col-6">
                                <div class="form-group">
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="exampleFormControlInput2"
                                    placeholder="Your Friend's Name"
                                  />
                                </div>
                              </div>
                              <div class="col-6">
                                <div class="form-group">
                                  <input
                                    type="email"
                                    class="form-control"
                                    id="exampleFormControlInput3"
                                    placeholder="Your E-mail"
                                  />
                                </div>
                              </div>
                              <div class="col-6">
                                <div class="form-group">
                                  <input
                                    type="email"
                                    class="form-control"
                                    id="exampleFormControlInput4"
                                    placeholder="Your Friends's E-mail"
                                  />
                                </div>
                              </div>
                              <div class="col-12">
                                <div class="form-group">
                                  <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea5"
                                    rows="3"
                                    placeholder="Your Message"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="submit-join">
                            <button type="submit" class="btn btn-secondary">Join the party</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="santa-tree">
          <g-image src="../assets/images/shnata-tree.png" alt="Santa Tree" />
        </div>
        <div class="gift-box">
          <g-image src="../assets/images/box.png" alt="Santa Tree" />
        </div>
        <div class="santa">
          <g-image src="../assets/images/shanta-img.png" alt="Box" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>
