
function Blog1() {
  return (
    <>
      <div className="flex flex-col overflow-hidden">
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Sanatana Dharma Foundation: Reviving Ancient Wisdom and Modern
              Values
            </h1>
            <p className="text-gray-600">Published on April 4, 2023</p>
          </div>
        </div>
        <div className="bg-white py-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row">
            <div className="w-full md:w-3/4 px-4">
              <img
                src="https://images.unsplash.com/photo-1506157786151-b8491531f063"
                alt="Blog Featured Image"
                className="mb-8"
              />
              <div className="prose max-w-none text-justify">
                <p>
                  The Sanatana Dharma Foundation stands as a guiding light for
                  age knowledge and contemporary principles with a focus on
                  reviving and advocating for Sanatana Dharma beliefs and
                  practices. It has established a footing in key Indian urban
                  centers like Delhi where its headquarters is located along
                  with branches in Chennai, Mumbai, Hyderabad and Indore. The
                  foundation is dedicated to nurturing a open minded and
                  non-sectarian perspective, towards Sanatana philosophy.
                </p>

                <h2 className="text-3xl font-bold py-4">
                  Our Mission and Vision
                </h2>
                <p>
                  The Sanatana Dharma Foundation aims to offer moral education
                  that meets the current requirements of society while combating
                  the impact of western influences that have marginalized Indian
                  traditions. The foundations goal is to rejuvenate and uphold
                  the principles of righteousness and integrity in order to
                  foster mutual trust among individuals. We aspire to bring
                  various aspects of Sanatana Dharma with a shared belief system
                  that goes beyond religious and cultural prejudices.
                </p>

                <h2 className="text-3xl font-bold py-4">
                  Engaging with Local Communities
                </h2>
                <p>
                  In every center the organization actively collaborates with
                  neighborhood groups and people who share a similar mindset and
                  cherish their cultural heritage as adherents of Sanatana
                  Dharma. Our goal is to revitalize the richness and solidarity
                  of our country through a range of projects. We concentrate on
                  removing elements that create divisions and promoting a shared
                  belief that goes beyond cultural differences.
                </p>

                <h2 className="text-3xl font-bold py-4">
                  Educational and Cultural Initiatives
                </h2>
                <p>
                  The Sanatana Dharma Foundation prioritizes education and
                  upholding heritage by organizing workshops and seminars along
                  with training programs that delve into the deep rooted
                  traditions and principles of Sanatana Dharma. Our educational
                  endeavors are tailored to suit individuals of all ages to make
                  sure that the timeless wisdom found in our scriptures is
                  readily available, to all.
                </p>

                {/* <div className="h-[300px] my-4 w-[350px] object-cover">
                  <img
                    src={temple}
                    className="w-full h-full"
                    alt="temple image"
                  />
                </div> */}

                <h2 className="text-3xl font-bold py-4">
                  Promoting Ethical and Religious Training
                </h2>
                <p>
                  Our foundation is committed to offering training that is
                  morally and religiously sound and meets the needs of the
                  modern world. In addition to Vedic ceremonies, yoga,
                  meditation, and philosophy, we also provide training sessions
                  and seminars covering other facets of Sanatana Dharma. These
                  initiatives aim to support people in living lives that are
                  meaningful, harmonious, and spiritually fulfilling.
                </p>

                <h2 className="text-3xl font-bold py-4">
                  Social and Charitable Activities
                </h2>
                <p>
                  The Sanatana Dharma Foundation is actively involved in
                  philanthropic and humanitarian endeavors. We host camps for
                  blood donation, medical care, and student scholarships for
                  impoverished backgrounds. In addition, our foundation plans
                  relief and rehabilitation efforts for times of natural
                  disaster and offers funding for medical care.
                </p>
              </div>
            </div>

       
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog1;
