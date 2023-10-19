const project_name = `Workshop for Neural Representation Learning for Robot Manipulation`
const proj_small_caps = `<span class="small-caps">NeuRL-RMW</span>: `
const conference_details = ['CoRL 2023', 'https://www.corl2023.org/', 'Muse 5', 'assets/images/corl23_logo.png']
const workshop_date = `November 6, 2023`

const talk_speaker_details = [
  ['Shuran Song', './assets/images/talks/shuran_song.jpg', 'Assistant Professor', 'Stanford University', 'https://shurans.github.io/'],
  ['David Held', './assets/images/talks/david_held.jpg', 'Associate Professor', 'Carnegie Mellon University', 'http://davheld.github.io'],
  ['Georgia Chalvatzaki', './assets/images/talks/Georgia-Chalvatzaki.jpg', 'Assistant Professor', 'TU Darmstadt', 'https://irosalab.com/people/georgia-chalvatzaki/'],
  ['Pete Florence', './assets/images/talks/pete-florence.png', 'Senior Research Scientist', 'Google Deepmind', 'https://www.peteflorence.com'],
  ['Chris Paxton', './assets/images/talks/chris-paxton.jpeg', 'Research Scientist', 'Meta AI', 'https://cpaxton.github.io'],
  ['Chad Jenkins', './assets/images/talks/chad_jenkins.jpg', 'Professor', 'University of Michigan', 'https://robotics.umich.edu/profile/chad-jenkins'],
]

const organizers_details = [
  ['Karthik Desingh', 'assets/images/organizers/karthik_desingh.jpeg', 'Assistant Professor', 'University of Minnesota, Twin Cities', 'https://karthikdesingh.com'],
  ['Changhyun Choi', 'assets/images/organizers/Changhyun_Choi.jpg', 'Assistant Professor', 'University of Minnesota, Twin Cities', 'https://cse.umn.edu/ece/changhyun-choi'],
  ['Yu Xiang', 'assets/images/organizers/Yu_Xiang.jpg', 'Assistant Professor', 'The University of Texas at Dallas', 'https://yuxng.github.io'],
  ['Jishnu Jaykumar Padalunkal', 'assets/images/organizers/Jishnu-Jaykumar-Padalunkal.jpg', 'PhD Student', 'The University of Texas at Dallas', 'https://jishnujayakumar.github.io'],
  ['Ninad Khargonkar', 'assets/images/organizers/Ninad-Khargonkar.jpg', 'PhD Student', 'The University of Texas at Dallas', 'https://kninad.github.io'],
  ['Sai Haneesh Allu', 'assets/images/organizers/Sai-Haneesh-Allu.webp', 'PhD Student', 'The University of Texas at Dallas', 'https://www.linkedin.com/in/sai-haneesh-allu'],
  ['Alireza Rezazadeh', 'assets/images/organizers/Alireza-Rezazadeh.png', 'PhD Student', 'University of Minnesota, Twin Cities', 'https://www.alireza.page'],
]

const accepted_presentations = [
  ['Carolina Higuera', 'https://carolinahiguera.github.io/', 'assets/images/ppt-talks/Carolina-Higuera.png', 'PhD Student', 'University of Washington', 'Perceiving Extrinsic Contacts from Touch Improves Learning Insertion Policies', 'Spotlight'],
  ['Sudeep Dasari', 'https://sudeepdasari.github.io/', 'assets/images/ppt-talks/Sudeep-Dasari.png', 'PhD Student', 'Carnegie Mellon University', 'An Unbiased Look at Datasets for Visuo-Motor Pre-Training', 'Spotlight'],
  ['Shuo Cheng', 'https://sites.google.com/view/shuocheng', 'assets/images/ppt-talks/Shuo-Cheng.jpg', 'PhD Student', 'Georgia Institute of Technology', 'Multi-Step Manipulation Planning with Neural Object Descriptors', 'Spotlight'],
  ['Yixuan Huang', 'https://robot-learning.cs.utah.edu/yixuanh', 'assets/images/ppt-talks/Yixuan-Huang.png', 'PhD Student', 'University of Utah', 'Reasoning and Planning about Unobserved Objects with Memory Models', 'Spotlight'],
  ['Jad Abou-Chakra', 'https://au.linkedin.com/in/jadchakra', 'assets/images/ppt-talks/Jad-Abou-Chakra.jpeg', 'PhD Student', 'Queensland University of Technology', 'Physically Embodied Gaussian Splatting: Embedding Physical Priors into a Visual 3D World Model For Robotics', 'Spotlight'],
  ['Xingyu Lin', 'https://xingyu-lin.github.io/', 'assets/images/ppt-talks/Xingyu-Lin.png', 'PostDoc', 'University of California, Berkeley', 'Generalizable Manipulation with Large Internet Data and Small Robot Data', 'Spotlight'],
  ['Stanley Lewis', 'https://www.linkedin.com/in/stanlew7531', 'assets/images/ppt-talks/Stanley-Lewis.jpg', 'PhD Student', 'University of Michigan Robotics Department', 'Object See, Robot Do: Language & Object Conditioned Affordance Wayfield Based Manipulation', 'Spotlight'],
  ['Zhenyu Jiang', 'https://zhenyujiang.me/', 'assets/images/ppt-talks/Zhenyu-Jiang.jpg', 'PhD Student', 'The University of Texas at Austin', 'Doduo: Dense Visual Correspondence from Unsupervised Semantic-Aware Flow', 'Spotlight'],
  ['Kushal Kedia', 'https://kushal2000.github.io/', 'assets/images/ppt-talks/Kushal-Kedia.png', 'PhD Student', 'Cornell University', 'Interactive Modeling of Human-Intent for Collaborative Manipulation', 'Spotlight'],
  ['Ankit Goyal', 'https://imankgoyal.github.io/', 'assets/images/ppt-talks/Ankit-Goyal.png', 'Other', '', 'RVT: Robotic View Transformer for 3D Object Manipulation', 'Spotlight'],
  ['Leon Kim', 'https://www.grasp.upenn.edu/people/leon-kim/', 'assets/images/ppt-talks/Leon-Kim.jpg', 'PhD Student', 'University of Pennsylvania', 'Vision-Based Contact Localization Without Touch or Force Sensing', 'Spotlight'],
  ['Shangjie Xue', '#', 'https://bulma.io/images/placeholders/128x128.png', 'PhD Student', 'Georgia Institute of Technology', 'Neural Field Dynamics Model for Granular Object Piles Manipulation', , ''], // poster, hence ''
  // ["FullName-1", "#", "", "Designation", "Affiliation", "Presentation Title", "Spotlight"],
  // ["FullName-2", "#", "", "Designation", "Affiliation", "Presentation Title", ""],
]

const org_affiliation_logos = [
  'assets/images/affiliation-logos/um-logo.png',
  'assets/images/affiliation-logos/utd-logo.png',
]


const schedule = [
  ['intro', '08:45 - 09:00', 'Introduction'],
  ['inv-talk', '09:00 - 09:30', 'Invited Talk'],
  ['inv-talk', '09:30 - 10:30', 'Spotlight Presentations'],
  ['coffee-break', '10:30 - 11:30', '<span class="bold has-text-danger">Spotlight Posters (Muse 1)</span> & Coffee Break'],
  ['inv-talk', '11:30 - 12:00', 'Invited Talk'],
  ['spot-poster', '12:00 - 12:30', 'Invited Talk'],
  ['lunch-break', '12:30 - 13:30', 'Lunch Break'],
  ['inv-talk', '13:30 - 14:00', 'Invited Talk'],
  ['inv-talk', '14:00 - 14:30', 'Invited Talk'],
  ['spot-ppt', '14:30 - 15:30', 'Spotlight presentations'],
  ['coffee-break', '15:30 - 16:00', 'Coffee Break'],
  ['inv-talk', '16:00 - 16:30', 'Invited Talk'],
  ['disc', '16:30 - 17:15', 'Panel Discussion'], 
]
