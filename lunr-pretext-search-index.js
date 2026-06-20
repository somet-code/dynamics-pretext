var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "ch1-section-continuum-approximation",
  "level": "1",
  "url": "ch1-section-continuum-approximation.html",
  "type": "Section",
  "number": "1.1",
  "title": "Continuum approximation",
  "body": " Continuum approximation  Earth's atmosphere is composed of a mixture of gases: molecular nitrogen ( ), molecular oxygen ( ), water vapor ( ), and others. Individual gas particles (which include both atoms and molecules) are very small, and much empty space generally lies between them on average. Each gas particle moves continuously and randomly, although larger-scale ordered motion like the wind can be superimposed on a collection of gas particles.  Smaller numbers of suspended liquid and solid particles like cloud droplets, ice crystals, and particulate matter occupy a small bit of the empty space between gas particles, with concentrations varying amounts in space and time. Briefly, precipitation particles reside in the atmosphere as they make their way from their parent clouds to the ground.  Keeping track of the largely random motions of numerous discrete particles in Earth's atmosphere is unnecessary for our purposes, since even the smallest atmospheric motions we are interested in occur on scales multiple orders of magnitude larger than microscopic intermolecular distances. Instead, we make use of the continuum approximation : We assume the atmosphere's mass is continuously distributed in space rather than held in discrete particles. This approximation commonly is made for fluids of sufficient density.  Points within the atmospheric continuum are not geometric points without size, but instead are volume elements of any convenient shape that are infinitesimally small yet contain many discrete particles. An example of a volume element is shown in below.   A volume element in the shape of a rectangular prism. Its edges are parallel to the -, -, and -axes and have lengths , , and , respectively. Its center has coordinates .   Rectangular prism with center point and length, width, and height.    We assume the discrete particles contained within a volume element are distributed homogeneously through it. Local averages of temperature, pressure, density, velocity, and other state variables describe the volume elements at any moment in time without reference to the volume element's history and are assumed to be uniform throughout the volume element. A representative value of any state variable is measured at the center of the volume element. For example, the pressure measured at is given by , as shown in below.   The volume element of , with pressure measured at its center.   Rectangular prism with measurement at center point and length, width, and height.    Some volume elements move through Earth's atmosphere with velocity (and we assume all discrete particles within the element move at this velocity); other volume elements remain fixed to specific locations on Earth's surface or within its atmosphere while many mobile volume elements flow through their open boundaries with velocity . The former volume elements, whose paths through the atmosphere can be tracked over time, often are called air parcels , air particles , material elements , or material volumes , and the portion of the atmosphere through which they move is called their environment . The latter volume elements, whose locations are centered at permanent locations in the Earth system for all time, often are called control volumes . These different behaviors of fluid elements lead to two different but connected frameworks from which we can conceptualize atmospheric flow: the Lagrangian framework and the Eulerian framework. We will explore these frameworks in SEC below.   below summarizes the essential components of the continuum approximation: FIGa shows a simple depiction of discrete particles in Earth's atmosphere, and FIGb shows volume elements imposed within the atmosphere, each containing many discrete particles.      A vertical cross-section through Earth's atmosphere, where the green rectangle represents the ground and blue circles represent discrete atmospheric particles.   Vertical cross-section through Earth's atmosphere, which is filled with discrete particles that become more spaced apart with height.     The atmospheric cross-section shown in is decomposed into volume elements, each of which contain multiple discrete particles.   Vertical cross-section through Earth's atmosphere, which is filled with discrete particles that become more spaced apart with height, with adjacent volume elements enclosing collections of discrete particles.      "
},
{
  "id": "ch1-section-continuum-approximation-4",
  "level": "2",
  "url": "ch1-section-continuum-approximation.html#ch1-section-continuum-approximation-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "continuum approximation "
},
{
  "id": "ch1-section-continuum-approximation-5",
  "level": "2",
  "url": "ch1-section-continuum-approximation.html#ch1-section-continuum-approximation-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "volume elements "
},
{
  "id": "ch1-volume-element",
  "level": "2",
  "url": "ch1-section-continuum-approximation.html#ch1-volume-element",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " A volume element in the shape of a rectangular prism. Its edges are parallel to the -, -, and -axes and have lengths , , and , respectively. Its center has coordinates .   Rectangular prism with center point and length, width, and height.   "
},
{
  "id": "ch1-section-continuum-approximation-7",
  "level": "2",
  "url": "ch1-section-continuum-approximation.html#ch1-section-continuum-approximation-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "state variables "
},
{
  "id": "ch1-volume-element-property",
  "level": "2",
  "url": "ch1-section-continuum-approximation.html#ch1-volume-element-property",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": " The volume element of , with pressure measured at its center.   Rectangular prism with measurement at center point and length, width, and height.   "
},
{
  "id": "ch1-section-continuum-approximation-9",
  "level": "2",
  "url": "ch1-section-continuum-approximation.html#ch1-section-continuum-approximation-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "air parcels air particles material elements material volumes environment control volumes "
},
{
  "id": "ch1-continuum",
  "level": "2",
  "url": "ch1-section-continuum-approximation.html#ch1-continuum",
  "type": "Figure",
  "number": "1.1.3",
  "title": "",
  "body": "    A vertical cross-section through Earth's atmosphere, where the green rectangle represents the ground and blue circles represent discrete atmospheric particles.   Vertical cross-section through Earth's atmosphere, which is filled with discrete particles that become more spaced apart with height.     The atmospheric cross-section shown in is decomposed into volume elements, each of which contain multiple discrete particles.   Vertical cross-section through Earth's atmosphere, which is filled with discrete particles that become more spaced apart with height, with adjacent volume elements enclosing collections of discrete particles.     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
