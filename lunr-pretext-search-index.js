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
  "body": " Continuum approximation  Earth's atmosphere is composed of a mixture of gases: molecular nitrogen ( ), molecular oxygen ( ), water vapor ( ), and others. Individual gas particles are very small, and much empty space generally lies between them on average. Each gas particle moves continuously and randomly, although larger-scale organized motion like wind can be superimposed on a collection of gas particles and dominate their overall motion.  Relatively few suspended liquid and solid particles like cloud droplets, ice crystals, and particulate matter occupy a small bit of the empty space between gas particles, with concentrations that vary in space and time. Briefly, precipitation particles reside in the atmosphere as they fall out of their parent clouds toward the ground.  Keeping track of the partially random motions of numerous discrete particles in Earth's atmosphere is unnecessary for our purposes, since even the smallest atmospheric motions we are interested in occur on scales multiple orders of magnitude larger than microscopic interparticle distances and affect many particles at once. Instead, we make use of the continuum approximation : We assume the atmosphere's mass is continuously distributed in space rather than held in discrete particles. This approximation is made for fluids when the length scale of a motion of interest is much larger than the average distance between particles making up the fluid (see the Knudsen number ), which is true for most atmospheric motions of interest.  Points within the atmospheric continuum are not geometric points without size, but instead are volume elements of any convenient shape that are much smaller than the atmospheric flows of interest within which they are caught up yet contain many discrete particles. An example of a volume element is shown in below.   A volume element in the shape of a rectangular prism. Its edges are parallel to the -, -, and -axes of the three-dimensional Cartesian coordinate system and have lengths , , and , respectively. Its center has coordinates .   Rectangular prism with center point and length, width, and height.    We assume the discrete particles contained within a volume element are distributed homogeneously through it. Local averages of temperature, pressure, density, velocity, and other state variables computed for the collection of particles contained within a volume element describe the volume element at any moment in time without reference to its history and are assumed to be uniform throughout the volume element. A representative value of any state variable is measured at the center of the volume element. For example, the pressure measured at the central point of a volume element is given by , as shown in below.   The volume element of , with pressure measured at its center.   Rectangular prism with measurement at center point and length, width, and height.    Some volume elements move through Earth's atmosphere with velocity (and we assume all discrete particles within the element move at this velocity). Other volume elements remain fixed to specific locations on Earth's surface or within its atmosphere while many mobile volume elements flow through their open boundaries with velocity . The former volume elements, whose paths through the atmosphere can be tracked over time, are called air parcels , air particles , material elements , or material volumes , and the portion of the atmosphere through which they move is called their environment . The latter volume elements, which are centered at permanent locations in the Earth system for all time, are called control volumes . These different types of volume elements lead to two different but connected frameworks from which we can conceptualize atmospheric flow: the Lagrangian framework and the Eulerian framework. We will explore these frameworks in .   below summarizes the essential components of the continuum approximation: shows a simple depiction of discrete particles in Earth's atmosphere, and shows volume elements imposed within the atmosphere, each containing many discrete particles.      A vertical cross-section through Earth's atmosphere, where the green rectangle represents the ground and blue circles represent discrete atmospheric particles.   Vertical cross-section through Earth's atmosphere, which is filled with discrete particles that become more spaced apart with height.     The atmospheric cross-section shown in is decomposed into volume elements, each of which contain multiple discrete particles.   Vertical cross-section through Earth's atmosphere, which is filled with discrete particles that become more spaced apart with height, with adjacent volume elements enclosing collections of discrete particles.      "
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
  "body": " A volume element in the shape of a rectangular prism. Its edges are parallel to the -, -, and -axes of the three-dimensional Cartesian coordinate system and have lengths , , and , respectively. Its center has coordinates .   Rectangular prism with center point and length, width, and height.   "
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
  "id": "ch1-section-calculus",
  "level": "1",
  "url": "ch1-section-calculus.html",
  "type": "Section",
  "number": "1.2",
  "title": "Calculus",
  "body": " Calculus   If we further assume state variables are described by differentiable functions of time and three-dimensional space (i.e., if we assume the values any given state variable takes on do not sharply jump from volume element to volume element, but instead vary continuously and smoothly in time and space), then we can apply calculus and differential equations to describe and predict changes in these atmospheric properties.  We will review relevant calculus below as well as introduce a twist on the chain rule for multivariable functions that helps us view atmospheric flow from different physical perspectives.    Partial differentiation  A function has an ordinary derivative denoted by (called Lagrange's notation or prime notation) or (called Leibniz's notation). \"Ordinary\" means is a function of only one independent variable.  In meteorology, we typically deal with more complicated functions of several independent variables denoting time and space.  Consider a state variable measured within an air parcel. While is depicted here as a scalar quantity for simplicity, be aware that it could represent a vector quantity.  To isolate the rate at which is changing as changes, we take the partial derivative of with respect to . This partial derivative is denoted by or ; the latter notation is preferred in this text.  When finding , we hold , , and constant. It follows that an alternative, explicit notation for the partial derivative of with respect to is     where the subscripts indicate which independent variables are held constant.  Likewise,           While the subscripts often will be omitted for brevity, we will use them whenever greater clarity about which independent variables are held constant is needed.    Vector algebra and calculus   Section 1.2.1 of Martin has a very thorough review of relevant vector algebra and calculus, and you should work through it carefully. A few especially important or possibly less familiar topics are briefly discussed next.    Right-hand rule  The right-hand rule is a convention used to define the orientations of coordinate axes and vectors. The -, -, and -axes of the three-dimensional Cartesian coordinate system are oriented perpendicular to each other following the right-hand rule ( ), and the right-hand rule determines the direction of the vector that results from the cross product of two other vectors ( ). See Wikipedia's right-hand rule page for instructions and visuals on how to use the right-hand rule either with your index and middle fingers and thumb or with curled fingers.      The right-hand rule applied to the -, -, and -axes of the three-dimensional Cartesian coordinate system, where the curved arrows show the sense of the right-hand rule for any combination of two axes.   Three straight orthogonal arrows representing the x-, y-, and z-axes of the Cartesian coordinate system, and curved arrows showing the sense of the right-hand rule for any combination of two axes.     The right-hand rule applied to the cross product (left) and the cross product (right), where the curved red arrows show the sense of the right-hand rule. Note the cross product is not commutative, so points in the opposite direction as .   (left) The cross product of two vectors and (right) the cross product of the same two vectors but in reverse order.      Two options for finding the orientation of the vector that results from the cross product of two other vectors by applying the right-hand rule to a human's right hand are shown in below. Make sure to use the right hand, not the left hand, or the results of your cross products will point opposite their correct directions!      The right-hand rule using the four non-thumb fingers that point together in the direction of vector , the palm that points in the direction of vector , and the thumb that points in the direction of the vector that results from the cross product of a human's right hand. Reproduced with modified vector annotations from P.wormer via Wikimedia Commons under CC BY-SA 3.0 .   The right-hand rule using the four fingers that point together in the direction of vector A, the palm that points in the direction of vector B, and the thumb that points in the direction of the vector that results from the cross product A x B of a human's right hand.     The right-hand rule using the index finger that points in the direction of vector , the middle finger that points in the direction of vector , and the thumb that points in the direction of the vector that results from the cross product of a human's right hand. Reproduced with modified vector annotations from Sepitropova via Wikimedia Commons under CC BY-SA 4.0 .   The right-hand rule using the index finger that points in the direction of vector A, the middle finger that points in the direction of vector B, and the thumb that points in the direction of the vector that results from the cross product A x B of a human's right hand.        Del  The operator , which is called del , nabla , or the gradient operator , is used to find the following important quantities.     The gradient of , , gives the magnitude and direction of the maximum change of the scalar field .    The divergence of , , gives the outward flux of the vector field .    The curl of , , gives the rotation of the vector field .    The Laplacian of , , gives the divergence of the gradient of the scalar field .    is called the Laplace operator . It occasionally is given by the symbol .        Del's important definitions and properties are described on Wikipedia's del page .    Properties of dot and cross products  We will employ several properties of dot and cross products in derivations. Wikipedia's dot product page and cross product page list many useful properties, and I recommend the reader refer to them as needed. Some properties we will use in derivations include     scalar multiplication with a cross product , where is a scalar;    the distributive property of a cross product over addition ; and    the vector triple product  and .        Taylor series   You learned in a calculus course that an infinitely differentiable function can be approximated by and sometimes perfectly represented by its Taylor series expansion at as given by       -order approximations  We often create an -order approximation of using its -order Taylor polynomial , which is the polynomial of degree formed from the partial sum of . For example, the first-order approximation of (also called its linear approximation ) is given by its first-order Taylor polynomial     and the second-order approximation of is given by its second-order Taylor polynomial     In many atmospheric dynamics applications, terms of second order and higher are grouped together as \" higher-order terms \" and are neglected in Taylor series expansions of state variables. Thus, state variables often are represented by their first-order approximations.     Total differentiation  Consider a state variable measured within an air parcel. Again, while is depicted here as a scalar quantity for simplicity, be aware that it could represent a vector quantity.  If the air parcel's position changes with time as it moves through the atmosphere, then , , and . Consequently, is a differentiable function of , and so we can quantify the time rate of change of within the air parcel by calculating . We do this using the chain rule for multivariable functions :     Since , simplifies to     where the terms have been rearranged to match standard presentations.   is the formula for the total derivative of .  Furthermore, , , and are the zonal , meridional , and vertical components of the air parcel's full (three-dimensional) velocity (i.e., wind) vector , respectively, and so becomes     Finally, we can use the gradient of , , to rewrite as     In most texts, is replaced with to emphasize this derivative differs from the ordinary derivative of a function of a single variable. Going forward, I will adopt this notation as shown in below to be consistent with standard presentations.     Since can be any scalar or vector state variable, we often write the total derivative as an operator:     where any state variable scalar or vector could be inserted into the parentheses.  Frequently, we use the following rearrangement of :     This arrangement more readily lends itself to physical interpretation. We interpret the terms of as follows.      is the Eulerian derivative (also called the local derivative ) that gives the rate at which is changing with respect to time at a fixed geographic point (i.e., at a specific location on Earth's surface or within its atmosphere) as air parcels move through that location. It is named after Leonhard Euler , who contributed significantly to fluid dynamics as well as mathematics, optics, astronomy, and other fields.     is the Lagrangian derivative (also called the total derivative , material derivative , substantial derivative , advective derivative , convective derivative , and individual derivative ) that gives the rate at which is changing with respect to time within a moving air parcel, following the air parcel as it moves through Earth's atmosphere. We can think of the Lagrangian derivative as describing sources and sinks of within the air parcel. Sometimes it is described as the time rate of change of \"following the motion\" or \"with the flow.\" It is named after Joseph-Louis Lagrange , who succeeded and collaborated with Euler and also made significant contributions to these fields.     is advection : the rate of importation at a fixed location by the wind of some atmospheric property carried within air parcels. In particular, advection gives the rate of change of the atmospheric property at a fixed location on Earth, due to the transport of air parcels by the wind through the location.   Be careful about the negative sign! The negative sign is part of the advection formula, and therefore for positive advection and for negative advection.    The negative of advection, (note the absence of the negative sign!), is called the convective derivative . Yes, this is confusing since the Lagrangian derivative also can be called the convective derivative. But in most sources, \"convective derivative\" refers to the negative of advection, not to the Lagrangian derivative.        For example, if we replace in with temperature (which means we implicitly are assuming ), we get     where is the local time rate of change of temperature (i.e., the local temperature tendency ), is the time rate of change of temperature within an air parcel caused by diabatic processes (i.e., it is the diabatic heating rate caused by radiative heating or cooling, latent heat release or absorption, conduction, and\/or mixing of air parcel and environmental air), and is temperature advection , where for warm advection and for cold advection.  The difference between Eulerian and Lagrangian derivatives is visualized in below.      In a Eulerian framework, state variables are measured within a control volume at a fixed location relative to Earth (dashed box) as air parcels (solid boxes) flow through its open boundaries.   An air parcel shown at three successive times as it passes through a control volume.     In a Lagrangian framework, state variables are measured within an air parcel as it moves through Earth's atmosphere.   An air parcel shown at three successive times as it moves through Earth's atmosphere.      It becomes clear from that the time rate of change of measured at a fixed location on Earth is due to the advection by the wind of air parcels through the location as well as the changes in inside the air parcels as they move through the location.  If , we say is conserved following the motion. In other words, remains constant within air parcels as they move through the atmosphere. But shows that, even if is conserved within air parcels, local changes in still can occur due to advection.  In summary, and give us two distinct but related frameworks by which we can measure the time rate of change of state variables: the Eulerian framework (i.e., the time rate of change measured at a fixed geographic location) and the Lagrangian framework (i.e., the time rate of change measured within a moving air parcel).   "
},
{
  "id": "ch1-section-calculus-subsection-partial-differentiation-2",
  "level": "2",
  "url": "ch1-section-calculus.html#ch1-section-calculus-subsection-partial-differentiation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ordinary derivative "
},
{
  "id": "ch1-section-calculus-subsection-partial-differentiation-5",
  "level": "2",
  "url": "ch1-section-calculus.html#ch1-section-calculus-subsection-partial-differentiation-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partial derivative "
},
{
  "id": "ch1-section-calculus-subsection-vector-calculus-subsubsection-right-hand-rule-2",
  "level": "2",
  "url": "ch1-section-calculus.html#ch1-section-calculus-subsection-vector-calculus-subsubsection-right-hand-rule-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "right-hand rule "
},
{
  "id": "ch1-section-calculus-subsection-vector-calculus-subsubsection-right-hand-rule-3",
  "level": "2",
  "url": "ch1-section-calculus.html#ch1-section-calculus-subsection-vector-calculus-subsubsection-right-hand-rule-3",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": "    The right-hand rule applied to the -, -, and -axes of the three-dimensional Cartesian coordinate system, where the curved arrows show the sense of the right-hand rule for any combination of two axes.   Three straight orthogonal arrows representing the x-, y-, and z-axes of the Cartesian coordinate system, and curved arrows showing the sense of the right-hand rule for any combination of two axes.     The right-hand rule applied to the cross product (left) and the cross product (right), where the curved red arrows show the sense of the right-hand rule. Note the cross product is not commutative, so points in the opposite direction as .   (left) The cross product of two vectors and (right) the cross product of the same two vectors but in reverse order.     "
},
{
  "id": "ch1-right-hand-rule-hands",
  "level": "2",
  "url": "ch1-section-calculus.html#ch1-right-hand-rule-hands",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": "    The right-hand rule using the four non-thumb fingers that point together in the direction of vector , the palm that points in the direction of vector , and the thumb that points in the direction of the vector that results from the cross product of a human's right hand. Reproduced with modified vector annotations from P.wormer via Wikimedia Commons under CC BY-SA 3.0 .   The right-hand rule using the four fingers that point together in the direction of vector A, the palm that points in the direction of vector B, and the thumb that points in the direction of the vector that results from the cross product A x B of a human's right hand.     The right-hand rule using the index finger that points in the direction of vector , the middle finger that points in the direction of vector , and the thumb that points in the direction of the vector that results from the cross product of a human's right hand. Reproduced with modified vector annotations from Sepitropova via Wikimedia Commons under CC BY-SA 4.0 .   The right-hand rule using the index finger that points in the direction of vector A, the middle finger that points in the direction of vector B, and the thumb that points in the direction of the vector that results from the cross product A x B of a human's right hand.     "
},
{
  "id": "ch1-section-calculus-subsection-vector-calculus-subsubsection-del-2",
  "level": "2",
  "url": "ch1-section-calculus.html#ch1-section-calculus-subsection-vector-calculus-subsubsection-del-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "del nabla gradient operator "
},
{
  "id": "ch1-section-calculus-subsection-vector-calculus-subsubsection-del-3",
  "level": "2",
  "url": "ch1-section-calculus.html#ch1-section-calculus-subsection-vector-calculus-subsubsection-del-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "gradient divergence curl Laplacian Laplace operator "
},
{
  "id": "ch1-section-calculus-subsection-vector-calculus-subsubsection-dot-cross-products-3",
  "level": "2",
  "url": "ch1-section-calculus.html#ch1-section-calculus-subsection-vector-calculus-subsubsection-dot-cross-products-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector triple product "
},
{
  "id": "ch1-section-calculus-subsection-taylor-series-subsubsection-approximations-2",
  "level": "2",
  "url": "ch1-section-calculus.html#ch1-section-calculus-subsection-taylor-series-subsubsection-approximations-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "-order approximation -order Taylor polynomial first-order approximation linear approximation "
},
{
  "id": "ch1-section-calculus-subsection-taylor-series-subsubsection-approximations-4",
  "level": "2",
  "url": "ch1-section-calculus.html#ch1-section-calculus-subsection-taylor-series-subsubsection-approximations-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "second-order approximation "
},
{
  "id": "ch1-section-calculus-subsection-taylor-series-subsubsection-approximations-6",
  "level": "2",
  "url": "ch1-section-calculus.html#ch1-section-calculus-subsection-taylor-series-subsubsection-approximations-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "higher-order terms "
},
{
  "id": "ch1-section-calculus-subsection-total-differentiation-3",
  "level": "2",
  "url": "ch1-section-calculus.html#ch1-section-calculus-subsection-total-differentiation-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "chain rule for multivariable functions "
},
{
  "id": "ch1-section-calculus-subsection-total-differentiation-8",
  "level": "2",
  "url": "ch1-section-calculus.html#ch1-section-calculus-subsection-total-differentiation-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "total derivative "
},
{
  "id": "ch1-section-calculus-subsection-total-differentiation-9",
  "level": "2",
  "url": "ch1-section-calculus.html#ch1-section-calculus-subsection-total-differentiation-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "zonal meridional vertical "
},
{
  "id": "ch1-section-calculus-subsection-total-differentiation-21",
  "level": "2",
  "url": "ch1-section-calculus.html#ch1-section-calculus-subsection-total-differentiation-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Eulerian derivative local derivative Lagrangian derivative total derivative material derivative substantial derivative advective derivative convective derivative individual derivative advection convective derivative "
},
{
  "id": "ch1-section-calculus-subsection-total-differentiation-24",
  "level": "2",
  "url": "ch1-section-calculus.html#ch1-section-calculus-subsection-total-differentiation-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "local temperature tendency diabatic heating rate temperature advection "
},
{
  "id": "ch1-eulerian-lagrangian",
  "level": "2",
  "url": "ch1-section-calculus.html#ch1-eulerian-lagrangian",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": "    In a Eulerian framework, state variables are measured within a control volume at a fixed location relative to Earth (dashed box) as air parcels (solid boxes) flow through its open boundaries.   An air parcel shown at three successive times as it passes through a control volume.     In a Lagrangian framework, state variables are measured within an air parcel as it moves through Earth's atmosphere.   An air parcel shown at three successive times as it moves through Earth's atmosphere.     "
},
{
  "id": "ch1-section-calculus-subsection-total-differentiation-28",
  "level": "2",
  "url": "ch1-section-calculus.html#ch1-section-calculus-subsection-total-differentiation-28",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conserved "
},
{
  "id": "ch1-section-calculus-subsection-total-differentiation-29",
  "level": "2",
  "url": "ch1-section-calculus.html#ch1-section-calculus-subsection-total-differentiation-29",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Eulerian framework Lagrangian framework "
},
{
  "id": "ch1-section-finite-differencing",
  "level": "1",
  "url": "ch1-section-finite-differencing.html",
  "type": "Section",
  "number": "1.3",
  "title": "Finite differencing",
  "body": " Finite differencing  Rarely do we know the form of the differentiable function that describes a given state variable. But thanks to meteorological instruments and numerical and artificial intelligence (AI) weather models, we do have discrete measurements of various state variable in space and time, and so we can apply finite differencing to approximate derivatives using discrete differences between measurements.  Consider the one-dimensional case first. If we have measurements of a state variable at a central point and two other points and each spaced from the central point, as shown in below, we can make the approximations     and     Note that is equivalent to the difference quotient of precalculus.   Adapted from Martin Figure 1.6. Example of centered differencing. Central point and equally-spaced surrounding points and , where is distance from . increases to the right.   A point in the middle of two equally-spaced points.    The reasoning of centered differencing can be applied to partial derivatives by only allowing one independent variable to change. For example, if we have a state variable , we can use centered differencing to approximate its first and second partial derivatives with respect to as     and     respectively.  Furthermore, it is not required that surrounding points be spaced at equal distances around a central point. For example,     and     are valid algorithms for approximating ordinary and partial derivatives, respectively, including in cases when and are not spaced at equal distances from . This more general case is shown in below. In fact, either or (but not both) could coincide with and these algorithms still would be valid!  Once again, is equivalent to the difference quotient of precalculus.   Reproduction of , but the surrounding points and are not equally spaced from the point .   A point in the middle of two unequally-spaced points.    "
},
{
  "id": "ch1-section-finite-differencing-2",
  "level": "2",
  "url": "ch1-section-finite-differencing.html#ch1-section-finite-differencing-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "finite differencing "
},
{
  "id": "ch1-section-finite-differencing-7",
  "level": "2",
  "url": "ch1-section-finite-differencing.html#ch1-section-finite-differencing-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "difference quotient "
},
{
  "id": "ch1-centered-difference",
  "level": "2",
  "url": "ch1-section-finite-differencing.html#ch1-centered-difference",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " Adapted from Martin Figure 1.6. Example of centered differencing. Central point and equally-spaced surrounding points and , where is distance from . increases to the right.   A point in the middle of two equally-spaced points.   "
},
{
  "id": "ch1-finite-difference",
  "level": "2",
  "url": "ch1-section-finite-differencing.html#ch1-finite-difference",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": " Reproduction of , but the surrounding points and are not equally spaced from the point .   A point in the middle of two unequally-spaced points.   "
},
{
  "id": "ch1-section-selected-references",
  "level": "1",
  "url": "ch1-section-selected-references.html",
  "type": "Section",
  "number": "1.4",
  "title": "Selected references",
  "body": " Selected references     Chapter 1 of Martin (2006) : See tentative course schedule for specific readings.    Chapters 1 and 2 of Holton and Hakim (2013) : See tentative course schedule for specific readings.    Chapters 1 and 6 of Marshall and Plumb (2007)      "
},
{
  "id": "ch2-section-cartesian-coordinates",
  "level": "1",
  "url": "ch2-section-cartesian-coordinates.html",
  "type": "Section",
  "number": "2.1",
  "title": "Cartesian coordinate system",
  "body": " Cartesian coordinate system  In , we used the Cartesian coordinate system (also called the rectangular coordinate system ) to identify the locations of volume elements in three-dimensional space. The location of the center of any volume element is given by the ordered triple , where , , and are its coordinates. These coordinates are signed distances from the origin measured parallel to the -, -, and -axes, which are mutually orthogonal and oriented relative to each other following the right-hand rule. Additionally, the unit direction vectors  , , and are parallel to the -, -, and -axes, respectively, and point in their positive directions.  An arbitrary vector is written in Cartesian coordinates in component form  or in unit vector form as . In either case, , , and are its , , and  components , respectively. Like coordinates, components are signed distances from the origin measured parallel to coordinate axes. When multiplied onto their corresponding unit direction vectors and summed, they result in the desired vector.  A position vector is drawn in Cartesian 3-space with its tail fixed to the origin and its tip attached to a volume element of interest with coordinates .     If the volume element can move through space with time , its position vector is .    It follows that the volume element's velocity is given by , where , , and are the velocity components in the , , and directions, respectively.    It further follows that the volume element's acceleration is given by .     An example of a volume element with coordinates and position vector is shown in below.   A volume element depicted as a rectangular prism in Cartesian 3-space with central coordinates and position vector . Dashed lines shown signed distances of the volume element from the origin drawn parallel to the -, -, and -axes.   The position vector of a volume element in Cartesian 3-space, with signed distances from the origin depicting the magnitudes and directions of its components.    "
},
{
  "id": "ch2-section-cartesian-coordinates-2",
  "level": "2",
  "url": "ch2-section-cartesian-coordinates.html#ch2-section-cartesian-coordinates-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cartesian coordinate system rectangular coordinate system unit direction vectors "
},
{
  "id": "ch2-section-cartesian-coordinates-3",
  "level": "2",
  "url": "ch2-section-cartesian-coordinates.html#ch2-section-cartesian-coordinates-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "component form unit vector form components "
},
{
  "id": "ch2-cartesian-coordinates",
  "level": "2",
  "url": "ch2-section-cartesian-coordinates.html#ch2-cartesian-coordinates",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": " A volume element depicted as a rectangular prism in Cartesian 3-space with central coordinates and position vector . Dashed lines shown signed distances of the volume element from the origin drawn parallel to the -, -, and -axes.   The position vector of a volume element in Cartesian 3-space, with signed distances from the origin depicting the magnitudes and directions of its components.   "
},
{
  "id": "ch2-section-spherical-coordinates",
  "level": "1",
  "url": "ch2-section-spherical-coordinates.html",
  "type": "Section",
  "number": "2.2",
  "title": "Spherical coordinate systems",
  "body": " Spherical coordinate systems  You learned in your multivariable calculus course about a standard spherical coordinate system that builds upon the Cartesian coordinate system. In this spherical coordinate system, the location of a point in three-dimensional space is given by the coordinates .      is the radial distance : the distance measured outward to the point from the origin.     is the polar angle (also called the azimuthal angle ): the angle measured counter-clockwise from the -axis to the projection of the point into the -plane. This same polar angle is used in standard polar and cylindrical coordinate systems.     is the zenith angle : the angle measured downward from the -axis to the line connecting the origin to the point.     Earth is nearly spherical and can be approximated as a sphere in most meteorological applications. We use Earth's mean radius $a$ as the radius of this hypothetical spherical Earth. Holton & Hakim (2013) give the value of as 6370 km, while other sources give slightly different values. We will use Holton & Hakim's value of in this course.  Rather than use the standard spherical coordinate system to describe the locations of volume elements on Earth's surface and within its atmosphere, we instead use a in which the location of an element is given by the coordinates .      is longitude : the angle measured horizontally counter-clockwise from the Prime Meridian.     is latitude : the angle measured horizontally toward the North Pole from the Equator.     is height : the radial distance measured from Earth's center.     Curves of longitude ( meridians ) and curves of latitude ( parallels ) are shown in below.   Parallels of latitude (left) and meridians of longitude (right) labeled at 30° increments relative to the Equator and Prime Meridian, respectively. Reproduced from Djexplo via Wikimedia Commons under CC0 1.0 Universal Public Domain Dedication .   Curves of latitude and longtiude on a spherical Earth at 30° increments relative to the Equator and Prime Meridian, respectively.    Meteorologists typically express as the sum of Earth's mean radius and geometric height  , which is the signed radial distance above Earth's mean sea level, as . is referred to as elevation when it describes the height of a point on Earth's surface, altitude when it describes the height of a point within Earth's atmosphere, and depth when it describes the height of a point within Earth's oceans or otherwise below its surface. In this last case, would be negative.  An example of a volume element within Earth's atmosphere with coordinates according to the geographic coordinate system described above is shown in below.   A volume element within Earth's atmosphere depicted as a rectangular prism in geographic 3-space with central coordinates . Earth is depicted as a sphere. Thick black labeled curves show the Equator and Prime Meridian. Dashed curves show the meridian and parallel for the volume element. Dashed lines show Earth's mean radius and angles corresponding to longitude and latitude for the volume element. The dotted line shows the volume element's geometric height . Note the volume element would be located on Earth's surface if .   The position of a volume element in Earth's atmosphere in geographic 3-space, with latitude and longitude and geometric height.    "
},
{
  "id": "ch2-section-spherical-coordinates-2",
  "level": "2",
  "url": "ch2-section-spherical-coordinates.html#ch2-section-spherical-coordinates-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard spherical coordinate system "
},
{
  "id": "ch2-section-spherical-coordinates-3",
  "level": "2",
  "url": "ch2-section-spherical-coordinates.html#ch2-section-spherical-coordinates-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "radial distance polar angle azimuthal angle zenith angle "
},
{
  "id": "ch2-section-spherical-coordinates-4",
  "level": "2",
  "url": "ch2-section-spherical-coordinates.html#ch2-section-spherical-coordinates-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Earth's mean radius "
},
{
  "id": "ch2-section-spherical-coordinates-6",
  "level": "2",
  "url": "ch2-section-spherical-coordinates.html#ch2-section-spherical-coordinates-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "longitude latitude height "
},
{
  "id": "ch2-section-spherical-coordinates-7",
  "level": "2",
  "url": "ch2-section-spherical-coordinates.html#ch2-section-spherical-coordinates-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "meridians parallels "
},
{
  "id": "ch2-lat-long",
  "level": "2",
  "url": "ch2-section-spherical-coordinates.html#ch2-lat-long",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": " Parallels of latitude (left) and meridians of longitude (right) labeled at 30° increments relative to the Equator and Prime Meridian, respectively. Reproduced from Djexplo via Wikimedia Commons under CC0 1.0 Universal Public Domain Dedication .   Curves of latitude and longtiude on a spherical Earth at 30° increments relative to the Equator and Prime Meridian, respectively.   "
},
{
  "id": "ch2-section-spherical-coordinates-9",
  "level": "2",
  "url": "ch2-section-spherical-coordinates.html#ch2-section-spherical-coordinates-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "geometric height elevation altitude depth "
},
{
  "id": "ch2-geographic-spherical-coordinates",
  "level": "2",
  "url": "ch2-section-spherical-coordinates.html#ch2-geographic-spherical-coordinates",
  "type": "Figure",
  "number": "2.2.2",
  "title": "",
  "body": " A volume element within Earth's atmosphere depicted as a rectangular prism in geographic 3-space with central coordinates . Earth is depicted as a sphere. Thick black labeled curves show the Equator and Prime Meridian. Dashed curves show the meridian and parallel for the volume element. Dashed lines show Earth's mean radius and angles corresponding to longitude and latitude for the volume element. The dotted line shows the volume element's geometric height . Note the volume element would be located on Earth's surface if .   The position of a volume element in Earth's atmosphere in geographic 3-space, with latitude and longitude and geometric height.   "
},
{
  "id": "ch2-section-local-cartesian-coordinates",
  "level": "1",
  "url": "ch2-section-local-cartesian-coordinates.html",
  "type": "Section",
  "number": "2.3",
  "title": "Local Cartesian coordinate system",
  "body": " Local Cartesian coordinate system   We combine the Cartesian coordinate system with the geographic coordinate system described previously to create the local Cartesian coordinate system . The word \"local\" has the same meaning here as it does for the local derivative of Chapter 1 : It refers to a fixed location on Earth.  We place the origin of the local Cartesian coordinate system at any point of interest fixed to the planet's surface ( ) or within its atmosphere ( ). This point is identified by geographic coordinates . Note this point rotates along with Earth about Earth's polar axis.   Equatorial projections showing the unit direction vectors , , and of the local Cartesian coordinate system placed at a point on Earth's surface in and a point within Earth's atmosphere in , where \"point\" refers to a volume element. The points have the same latitude as shown and the same longitude that, while not shown, corresponds to the right-half of the curve of Earth's surface. The Equator is labeled EQ and the North Pole is labeled NP. Earth's mean radius is given by and the point's geometric height in is given by . The point's radial distance from Earth's polar axis is given by in and in .      A point on Earth's surface with the local Cartesian coordinate system placed at that point.       A point within Earth's atmosphere with the local Cartesian coordinate system placed at that point.      The local Cartesian coordinate system has the following characteristics.      increases (decreases) to the local east (west), parallel to curves of latitude.    varies directly with .    According to the arc length formula, a small change in is given by along Earth's surface ( ) and by within Earth's atmosphere ( ).        increases (decreases) to the local north (south), parallel to curves of longitude.    varies directly with .    According to the arc length formula, a small change in is given by along Earth's surface ( ) and by within Earth's atmosphere ( ).        increases (decreases) locally upward (downward), perpendicular to Earth's mean sea level.     points to the local east, parallel to the -axis.     points to the local north, parallel to the -axis.     points locally upward, parallel to the -axis.     is the zonal component of velocity and is positive (negative) for westerly (easterly) flow. (Remember wind is named for the direction it blows from , not toward!)     is the meridional component of velocity and is positive (negative) for southerly (northerly) flow.     is the vertical component of velocity and is positive (negative) for upward (downward) motion.      North polar projection showing the geometric relationship between arc and longitudinal displacement at latitude measured along Earth's surface in and within Earth's atmosphere in . The North Pole is labeled NP. The radial distance from Earth's polar axis is given by in and in .      Arc length along Earth's surface at a fixed latitude and its corresponding longitudinal displacement.       Arc length within Earth's atmosphere at a fixed latitude and its corresponding longitudinal displacement.       Equatorial projection showing the geometric relationship between arc and latitudinal displacement at longitude measured along Earth's surface in and within Earth's atmosphere in . The longitude , while not shown, corresponds to the right-half of the curve of Earth's surface. The Equator is labeled EQ and the North Pole is labeled NP.      Arc length along Earth's surface at a fixed longitude and its corresponding latitudinal displacement.       Arc length within Earth's atmosphere at a fixed longitude and its corresponding latitudinal displacement.      A very simplified depiction of the correspondence between the coordinates and velocity components of the local Cartesian Coordinate system is shown in below.   Simplified depiction of the direct correspondence between the zonal ( ), meridional ( ), and vertical ( ) directions (left) and the zonal ( ), meridional ( ), and vertical ( ) velocity components (right), respectively, of the local Cartesian coordinate system. Reproduced from Fig. 1.1 of Stull (2017) under CC BY-NC-SA 4.0 .   Directions (left) and velocity components (right) of the local Cartesian coordinate system.      Note on rotation, sphericity, and the local Cartesian coordinate system  A difficulty of using the local Cartesian coordinate system is that its -, -, and -axes and their corresponding , , and unit direction vectors, respectively, placed at any location fixed relative to Earth change orientation in space as Earth rotates. We will tackle this complication in Chapter 3.  Another difficulty of using the local Cartesian coordinate system is that its -, -, and -axes and their corresponding , , and unit direction vectors, respectively, change orientation in space depending on the longitude and latitude of the location at which the origin of the coordinate system is placed, as shown in below. We will tackle this complication in Chapter 5.   Examples of the local Cartesian coordinate system unit direction vectors , , and when the origin of the coordinate system is placed at different locations on Earth's surface along a line of latitude (horizontal dashed curve) and a line of longitude (vertical dashed curve) as well within Earth's atmosphere. Note that the orientations of the unit direction vectors in space change depending on the placement of the origin.   Unit direction vectors at points with different latitude, longitude, and height on Earth's surface and in its atmosphere.     "
},
{
  "id": "ch2-section-local-cartesian-coordinates-2-1",
  "level": "2",
  "url": "ch2-section-local-cartesian-coordinates.html#ch2-section-local-cartesian-coordinates-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "local Cartesian coordinate system "
},
{
  "id": "ch2-local-cartesian-coordinates",
  "level": "2",
  "url": "ch2-section-local-cartesian-coordinates.html#ch2-local-cartesian-coordinates",
  "type": "Figure",
  "number": "2.3.1",
  "title": "",
  "body": " Equatorial projections showing the unit direction vectors , , and of the local Cartesian coordinate system placed at a point on Earth's surface in and a point within Earth's atmosphere in , where \"point\" refers to a volume element. The points have the same latitude as shown and the same longitude that, while not shown, corresponds to the right-half of the curve of Earth's surface. The Equator is labeled EQ and the North Pole is labeled NP. Earth's mean radius is given by and the point's geometric height in is given by . The point's radial distance from Earth's polar axis is given by in and in .      A point on Earth's surface with the local Cartesian coordinate system placed at that point.       A point within Earth's atmosphere with the local Cartesian coordinate system placed at that point.     "
},
{
  "id": "ch2-section-local-cartesian-coordinates-2-5",
  "level": "2",
  "url": "ch2-section-local-cartesian-coordinates.html#ch2-section-local-cartesian-coordinates-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "zonal meridional vertical "
},
{
  "id": "ch2-local-cartesian-coordinates-differential-x",
  "level": "2",
  "url": "ch2-section-local-cartesian-coordinates.html#ch2-local-cartesian-coordinates-differential-x",
  "type": "Figure",
  "number": "2.3.2",
  "title": "",
  "body": " North polar projection showing the geometric relationship between arc and longitudinal displacement at latitude measured along Earth's surface in and within Earth's atmosphere in . The North Pole is labeled NP. The radial distance from Earth's polar axis is given by in and in .      Arc length along Earth's surface at a fixed latitude and its corresponding longitudinal displacement.       Arc length within Earth's atmosphere at a fixed latitude and its corresponding longitudinal displacement.     "
},
{
  "id": "ch2-local-cartesian-coordinates-differential-y",
  "level": "2",
  "url": "ch2-section-local-cartesian-coordinates.html#ch2-local-cartesian-coordinates-differential-y",
  "type": "Figure",
  "number": "2.3.3",
  "title": "",
  "body": " Equatorial projection showing the geometric relationship between arc and latitudinal displacement at longitude measured along Earth's surface in and within Earth's atmosphere in . The longitude , while not shown, corresponds to the right-half of the curve of Earth's surface. The Equator is labeled EQ and the North Pole is labeled NP.      Arc length along Earth's surface at a fixed longitude and its corresponding latitudinal displacement.       Arc length within Earth's atmosphere at a fixed longitude and its corresponding latitudinal displacement.     "
},
{
  "id": "ch2-local-cartesian-coordinates-stull",
  "level": "2",
  "url": "ch2-section-local-cartesian-coordinates.html#ch2-local-cartesian-coordinates-stull",
  "type": "Figure",
  "number": "2.3.4",
  "title": "",
  "body": " Simplified depiction of the direct correspondence between the zonal ( ), meridional ( ), and vertical ( ) directions (left) and the zonal ( ), meridional ( ), and vertical ( ) velocity components (right), respectively, of the local Cartesian coordinate system. Reproduced from Fig. 1.1 of Stull (2017) under CC BY-NC-SA 4.0 .   Directions (left) and velocity components (right) of the local Cartesian coordinate system.   "
},
{
  "id": "ch2-local-cartesian-coordinates-sphericity",
  "level": "2",
  "url": "ch2-section-local-cartesian-coordinates.html#ch2-local-cartesian-coordinates-sphericity",
  "type": "Figure",
  "number": "2.3.5",
  "title": "",
  "body": " Examples of the local Cartesian coordinate system unit direction vectors , , and when the origin of the coordinate system is placed at different locations on Earth's surface along a line of latitude (horizontal dashed curve) and a line of longitude (vertical dashed curve) as well within Earth's atmosphere. Note that the orientations of the unit direction vectors in space change depending on the placement of the origin.   Unit direction vectors at points with different latitude, longitude, and height on Earth's surface and in its atmosphere.   "
},
{
  "id": "ch2-section-selected-references",
  "level": "1",
  "url": "ch2-section-selected-references.html",
  "type": "Section",
  "number": "2.4",
  "title": "Selected references",
  "body": " Selected references     Chapter 2 of Martin (2006) : See tentative course schedule for specific readings.    Chapter 1 of Stull (2017)      "
},
{
  "id": "ch3-section-gravitational-force",
  "level": "1",
  "url": "ch3-section-gravitational-force.html",
  "type": "Section",
  "number": "3.1",
  "title": "Gravitational force",
  "body": " Gravitational force  The gravitational force  [N] is an attractive force between two masses. Newton's law of universal gravitation gives the magnitude of the gravitational force:     where [m] is the distance between the centers of masses [kg] and [kg] and  is the gravitational constant .  For an air parcel attracted to Earth by its gravitational force ( ), we can replace with the air parcel's mass and with Earth's mass . Then dictates     where now represents the distance between the air parcel's center of mass and Earth's center of mass and points from Earth's center of mass to the air parcel's center of mass. (Note is a unit vector, since .) If we further assume Earth is spherical with radius , becomes     Dividing by produces the gravitational force per unit mass, which is called the gravitational acceleration  [ ]:         A wide view of Earth's gravitational force attracting the air parcel from toward the planet's center of mass.   Air parcel attracted to Earth by gravitational force.     A zoomed-in view of Earth's gravitational force acting on the center of mass of the air parcel from toward the planet's center of mass.   Air parcel attracted to Earth by gravitational force.      "
},
{
  "id": "ch3-section-gravitational-force-2",
  "level": "2",
  "url": "ch3-section-gravitational-force.html#ch3-section-gravitational-force-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "gravitational force Newton's law of universal gravitation "
},
{
  "id": "ch3-section-gravitational-force-4",
  "level": "2",
  "url": "ch3-section-gravitational-force.html#ch3-section-gravitational-force-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "gravitational constant "
},
{
  "id": "ch3-section-gravitational-force-9",
  "level": "2",
  "url": "ch3-section-gravitational-force.html#ch3-section-gravitational-force-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "gravitational acceleration "
},
{
  "id": "ch3-gravitational-force",
  "level": "2",
  "url": "ch3-section-gravitational-force.html#ch3-gravitational-force",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": "    A wide view of Earth's gravitational force attracting the air parcel from toward the planet's center of mass.   Air parcel attracted to Earth by gravitational force.     A zoomed-in view of Earth's gravitational force acting on the center of mass of the air parcel from toward the planet's center of mass.   Air parcel attracted to Earth by gravitational force.     "
},
{
  "id": "ch3-section-pressure-gradient-force",
  "level": "1",
  "url": "ch3-section-pressure-gradient-force.html",
  "type": "Section",
  "number": "3.2",
  "title": "Pressure gradient force",
  "body": " Pressure gradient force   Pressure [Pa] is the magnitude of a force applied perpendicular to a surface divided by the area of the surface:   ,  where is the pressure and [N] is the magnitude of the force applied perpendicular to a surface with area [ ].   Fluid pressure is compressive, and atmospheric pressure is fluid pressure caused by the combined force of numerous discrete atmospheric particles colliding with a surface of any orientation placed anywhere within the atmosphere.  The air parcel from experiences such combined compressive forces perpendicular to each of its six faces, as represented by the force vectors in below. The pressure at its center results. Note if the air parcel was a different shape, it still would experience these forces perpendicular to its boundaries, which would result in the same central pressure.   Vectors represent the combined compressive forces from discrete atmospheric particles colliding with the six faces of the air parcel from , creating pressure measured at its center.   Rectangular prism with pressure measured at center point and forces compressing all faces.    For simplicity, consider only the forces acting on the left and right sides of the air parcel from , denoted and , respectively, as shown in below.   The air parcel from with only the combined compressive forces and acting on the left and right faces of the air parcel, respectively.   Rectangular prism with pressure measured at center point and forces compressing the left and right faces.    We can create a linear approximation of each of these forces using a Taylor series expansion of pressure from the center of the air parcel to its left and right faces and neglecting the higher order terms.        where is evaluated at the center of the air parcel, i.e., . Note is positive since it points in the -direction and is negative since it points in the -direction.  Adding and produces the net force in the -direction :     Since , we can write the net force per unit mass in the -direction by dividing by :     Similarly, we can write the net forces per unit mass in the and -directions as     and     Note that each of these accelerations depends on a spatial derivative of pressure, or a pressure gradient , but not on a specific value of pressure.  We combine the three component accelerations of into the pressure gradient force (PGF) per unit mass , or the pressure gradient acceleration :     where is the PGF and is the pressure gradient acceleration.  A gradient vector points from lower values toward higher values of the scalar quantity of interest, in the direction of fastest increase. Visually, a gradient vector points locally perpendicular to isopleths (contours of constant value) of the scalar quantity of interest toward higher values, and its magnitude is determined by the strength of the gradient: Closer spacing of isopleths indicates larger gradients.  It follows that the pressure gradient vector points from lower to higher values of pressure, in the direction of fastest increase, locally perpendicular to isobars (contours of constant pressure), and its magnitude increases as the strength of the pressure gradient increases. But the negative sign in means that the pressure gradient force vector and, likewise, the pressure gradient acceleration vector point in the opposite direction as the pressure gradient vector. These principles are visualized in below.   Three isobars of pressure with values (middle), (top), and (bottom), where the increment of pressure is positive. The pressure gradient vectors point locally perpendicular to the isobars away from the lower value of pressure denoted by the isobar and toward the higher value of pressure denoted by the isobar. The pressure gradient force vectors point locally perpendicular to the isobars away from the higher value of pressure denoted by the isobar and toward the lower value of pressure denoted by the isobar. Both vectors are longer (shorter) on the right (left) side of the image where the isobars are spaced closer together (spread further apart), indicating a stronger (weaker) pressure gradient.   Three isobars spaced further apart on the left and closer together on the right, with pressure gradient and pressure gradient vectors shown at the left and right. The vectors are shorter on the left and longer on the right.    "
},
{
  "id": "ch3-section-pressure-gradient-force-2",
  "level": "2",
  "url": "ch3-section-pressure-gradient-force.html#ch3-section-pressure-gradient-force-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Pressure "
},
{
  "id": "ch3-section-pressure-gradient-force-5",
  "level": "2",
  "url": "ch3-section-pressure-gradient-force.html#ch3-section-pressure-gradient-force-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fluid pressure atmospheric pressure "
},
{
  "id": "ch3-airparcel-pressure-forces",
  "level": "2",
  "url": "ch3-section-pressure-gradient-force.html#ch3-airparcel-pressure-forces",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": " Vectors represent the combined compressive forces from discrete atmospheric particles colliding with the six faces of the air parcel from , creating pressure measured at its center.   Rectangular prism with pressure measured at center point and forces compressing all faces.   "
},
{
  "id": "ch3-airparcel-pressure-forces-x",
  "level": "2",
  "url": "ch3-section-pressure-gradient-force.html#ch3-airparcel-pressure-forces-x",
  "type": "Figure",
  "number": "3.2.2",
  "title": "",
  "body": " The air parcel from with only the combined compressive forces and acting on the left and right faces of the air parcel, respectively.   Rectangular prism with pressure measured at center point and forces compressing the left and right faces.   "
},
{
  "id": "ch3-section-pressure-gradient-force-22",
  "level": "2",
  "url": "ch3-section-pressure-gradient-force.html#ch3-section-pressure-gradient-force-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pressure gradient "
},
{
  "id": "ch3-section-pressure-gradient-force-23",
  "level": "2",
  "url": "ch3-section-pressure-gradient-force.html#ch3-section-pressure-gradient-force-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pressure gradient force (PGF) per unit mass pressure gradient acceleration "
},
{
  "id": "ch3-section-pressure-gradient-force-26",
  "level": "2",
  "url": "ch3-section-pressure-gradient-force.html#ch3-section-pressure-gradient-force-26",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "isopleths "
},
{
  "id": "ch3-section-pressure-gradient-force-27",
  "level": "2",
  "url": "ch3-section-pressure-gradient-force.html#ch3-section-pressure-gradient-force-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "isobars "
},
{
  "id": "ch3-isobars",
  "level": "2",
  "url": "ch3-section-pressure-gradient-force.html#ch3-isobars",
  "type": "Figure",
  "number": "3.2.3",
  "title": "",
  "body": " Three isobars of pressure with values (middle), (top), and (bottom), where the increment of pressure is positive. The pressure gradient vectors point locally perpendicular to the isobars away from the lower value of pressure denoted by the isobar and toward the higher value of pressure denoted by the isobar. The pressure gradient force vectors point locally perpendicular to the isobars away from the higher value of pressure denoted by the isobar and toward the lower value of pressure denoted by the isobar. Both vectors are longer (shorter) on the right (left) side of the image where the isobars are spaced closer together (spread further apart), indicating a stronger (weaker) pressure gradient.   Three isobars spaced further apart on the left and closer together on the right, with pressure gradient and pressure gradient vectors shown at the left and right. The vectors are shorter on the left and longer on the right.   "
},
{
  "id": "ch3-section-friction-force",
  "level": "1",
  "url": "ch3-section-friction-force.html",
  "type": "Section",
  "number": "3.3",
  "title": "Viscous friction force",
  "body": " Viscous friction force   Forces acting on the surface of an air parcel can cause the air parcel to deform (change in shape and possibly size) through tension, compression, and\/or shear. We express such deforming forces acting on a unit area of the parcel as stress  [Pa], which is measured using the same units as pressure.  Forces can act on any of the six faces of the air parcel from , and they can act in three orthogonal directions on each face, thereby creating stress. In below, the three vectors attached to each face of the air parcel represent the three orthogonal directions, parallel to the coordinate axes, in which a force can act on a given face.   Vectors represent the three orthogonal directions in which forces acting on the six faces of the air parcel from can be directed, thereby creating stress.   Rectangular prism with forces acting in all three directions on all faces.    While stress is the result of external forces, it translates internally through the air parcel via viscosity. Viscosity expresses how much a fluid like air resists deformation due to interactions such as collisions between its own particles. Its value depends on the fluid's molecular makeup as well as its thermodynamic state, and it often is measured using the dynamic viscosity  [Pa s], where larger values of reflect higher viscosity.  When faster-moving particles of a fluid collide with slower-moving particles, they transfer some of their momentum to the slower-moving particles. This causes the faster-moving particles to slow down while the slower-moving particles speed up. Thus, through momentum transfer between adjacent particles, viscosity minimizes velocity differences within a fluid.  If the air parcel of is at rest relative to its environment, it only experiences deformation due to the forces of discrete particles randomly colliding with its bounding surface, which collectively are expressed per unit area as pressure and are compressive, as discussed previously in . But if there is relative motion between the air parcel and its environment due to fluid flow, the air parcel can experience additional (normal and tangential) stresses due to fluid velocity gradients (i.e., wind shear ) that translate through it via viscosity. We deem the sum total of these additional deforming forces the viscous friction force or sometimes simply the viscous force , the friction force , or the frictional force .  The components of the viscous friction force per unit mass are given by     where [ ] is the kinematic viscosity .  We combine the three component accelerations of into the viscous friction force per unit mass , or the viscous friction acceleration :     where is the viscous friction force and is the viscous friction acceleration.  The complete derivation of and is beyond the scope of this course: See Kundu et al. (2016) for a detailed derivation. Martin (2006) presents a simplified derivation of in his Subsection 2.1.3; since the viscous friction force can be neglected in most meteorological applications, as discussed below, I refer you to his derivation rather than reproduce it here.  The dependence of the viscous friction force on as shown in means that the viscous friction force is present only in a moving fluid. Furthermore, the second-order derivatives encompassed by the Laplacian of velocity and shown explicitly in mean that the viscous friction force is present only in moving fluids with nonlinear velocity profiles.  For altitudes relevant to the large majority of meteorological applications, the dynamic viscosity of air is largest next to Earth's surface where the air is densest, pressure is highest, and temperature in the troposphere generally is warmest: According to the U.S. Standard Atmosphere (1976) , under average conditions, Pa s next to Earth's surface and decreases linearly through the troposphere. Consequently, the viscous friction force is negligibly small in atmospheric motions occurring more than a few millimeters above the surface. But the extreme wind shear that occurs in this layer due to viscosity leads to turbulence, which translates the effects of the viscous friction force upward through a much greater depth: up to a few kilometers during the daytime! Turbulence is not of focus in this course, but it is an interesting and meteorologically significant (not to mention aeronautically significant!) topic that you will return to in future courses.    Couette flow   Couette flow , which is the flow of a viscous fluid bounded between two surfaces moving tangentially relative to each other, often is used to visualize shear stress (also called tangential stress ). The set-up of steady planar Couette flow is shown in below.   Vertical cross-section in the -plane depicting two surfaces (gray rectangles) of infinite length (in the -direction) and width (in the -direction, not shown but perpendicular to the screen) separated by vertical distance and bounding a horizontally infinite viscous fluid of depth . The lower surface is fixed (as indicated by the hatching) and the upper surface moves to the right at . The blue dashed arrows represent steady planar Couette flow in the fluid. The solid blue lines give the vertical profile of the horizontal velocity .   Fluid bounded between two surfaces moving tangentially relative to each other, with the lower surface fixed and the upper surface moving to the right, with horizontal flow in the fluid between the two surfaces.    The upper surface drags the fluid particles directly below it: You could think of these particles as constituting an infinitesimally thin layer of fluid directly below the upper surface. This causes the layer of fluid in contact with the plate to move to the right at with the plate. The upper layer of fluid drags the layer of fluid directly below it due to viscosity, and that layer of fluid drags the layer of fluid directly below it due to viscosity, and so on. Likewise, the lower surface drags the fluid particles directly above it, causing that layer of fluid to also be motionless. The lower layer of fluid drags the layer of fluid directly above it due to viscosity, and that layer of fluid drags the layer of fluid directly above it due to viscosity, and so on. After a time, steady state (i.e., ) is achieved through this downward momentum transfer by the fluid particles. The resulting vertical profile of the horizontal velocity is     The shear stress for a Newtonian fluid which air can be approximated as has been determined empirically to be linearly related to velocity gradients within the fluid, as expressed by Newton's law of viscosity . For planar Couette flow, this produces     where the first subscript indicates the direction of the normal vector of the cross-sectional area upon which stress is acting (also the flow velocity component under consideration) and the second subscript indicates the direction in which the stress acts (also the direction in which the flow is sheared). represents the external force per unit area that must be applied to the plate to keep it moving at a constant rate despite the viscous fluid dragging it back.  Note that in this simple case of steady planar Couette flow is constant since . Thus, it follows that no viscous friction force is experienced by the fluid: Since is a linear function of , .  But if was nonlinear, such as is the case soon after the upper surface begins moving forward and before steady state is achieved, and the fluid would experience a non-zero viscous friction force that progressively nudges it toward steady planar Couette flow.   "
},
{
  "id": "ch3-section-friction-force-2-1",
  "level": "2",
  "url": "ch3-section-friction-force.html#ch3-section-friction-force-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "deform stress "
},
{
  "id": "ch3-airparcel-stress",
  "level": "2",
  "url": "ch3-section-friction-force.html#ch3-airparcel-stress",
  "type": "Figure",
  "number": "3.3.1",
  "title": "",
  "body": " Vectors represent the three orthogonal directions in which forces acting on the six faces of the air parcel from can be directed, thereby creating stress.   Rectangular prism with forces acting in all three directions on all faces.   "
},
{
  "id": "ch3-section-friction-force-2-4",
  "level": "2",
  "url": "ch3-section-friction-force.html#ch3-section-friction-force-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Viscosity dynamic viscosity "
},
{
  "id": "ch3-section-friction-force-2-6",
  "level": "2",
  "url": "ch3-section-friction-force.html#ch3-section-friction-force-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "wind shear viscous friction force viscous force friction force frictional force "
},
{
  "id": "ch3-section-friction-force-2-9",
  "level": "2",
  "url": "ch3-section-friction-force.html#ch3-section-friction-force-2-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "kinematic viscosity "
},
{
  "id": "ch3-section-friction-force-2-10",
  "level": "2",
  "url": "ch3-section-friction-force.html#ch3-section-friction-force-2-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "viscous friction force per unit mass viscous friction acceleration "
},
{
  "id": "ch3-section-friction-force-subsection-couette-flow-2",
  "level": "2",
  "url": "ch3-section-friction-force.html#ch3-section-friction-force-subsection-couette-flow-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Couette flow shear stress tangential stress "
},
{
  "id": "ch3-couette-flow",
  "level": "2",
  "url": "ch3-section-friction-force.html#ch3-couette-flow",
  "type": "Figure",
  "number": "3.3.2",
  "title": "",
  "body": " Vertical cross-section in the -plane depicting two surfaces (gray rectangles) of infinite length (in the -direction) and width (in the -direction, not shown but perpendicular to the screen) separated by vertical distance and bounding a horizontally infinite viscous fluid of depth . The lower surface is fixed (as indicated by the hatching) and the upper surface moves to the right at . The blue dashed arrows represent steady planar Couette flow in the fluid. The solid blue lines give the vertical profile of the horizontal velocity .   Fluid bounded between two surfaces moving tangentially relative to each other, with the lower surface fixed and the upper surface moving to the right, with horizontal flow in the fluid between the two surfaces.   "
},
{
  "id": "ch3-section-friction-force-subsection-couette-flow-4",
  "level": "2",
  "url": "ch3-section-friction-force.html#ch3-section-friction-force-subsection-couette-flow-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "steady state "
},
{
  "id": "ch3-section-friction-force-subsection-couette-flow-6",
  "level": "2",
  "url": "ch3-section-friction-force.html#ch3-section-friction-force-subsection-couette-flow-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Newton's law of viscosity "
},
{
  "id": "ch3-section-newtons-laws",
  "level": "1",
  "url": "ch3-section-newtons-laws.html",
  "type": "Section",
  "number": "3.4",
  "title": "Newton’s laws of motion",
  "body": " Newton's laws of motion  Now that we've explored the forces acting on the air parcel of , we can combine them using Newton's laws of motion.   Newton's laws of motion often are phrased in some variation of the following.      law: An object remains at rest or in motion at constant velocity unless acted on by a non-zero net external force.     law: The net external force acting on an object equals the time rate of change of the object's momentum.     law: Whenever one object exerts a force on a second object, the second object exerts an equal and opposite force on the first object.      Stull (2017) (p. 292) shares translations of these laws from Newton's The Mathematical Principles of Natural Philosophy .      law: Every body perseveres in its state of being at rest or of moving uniformly straight forward, except inasmuch as it is compelled by impressed forces to change its state.     law: Change in motion is proportional to the motive force impressed and takes place following the straight line along which that force is impressed.     law: To any action, there is always a contrary, equal reaction; in other words, the actions of two bodies each upon the other are always equal and opposite in direction.     Newton's law of motion has come to define inertia , which is the tendency described above.  Newton's law motion follows from the law and can be expressed mathematically as     where is the net force that results from the sum of all forces acting on the object of interest and [ ] is the object's momentum.  Substituting the definition of momentum into and applying the product rule produces     If the object's mass is conserved (constant), which is the usual assumption,     and consequently reduces to the simpler, more common form of Newton's law of motion:     where is the object's acceleration.  Dividing by the object's mass isolates the object's acceleration:     Using acceleration rather than force is preferable in meteorology since it is not reasonable to measure the mass of air parcel (our object of interest).  For an air parcel as described in this chapter, assuming its mass is constant (the typical assumption and one that we will revisit later when exploring mass conservation), we can combine the effects of the fundamental forces on it to expand the left side of as follows:     Furthermore, since the acceleration of the air parcel is given by , can be written as     which we call the vector equation of motion or the vector momentum equation , or simply the singular equation of motion or momentum equation .   is a statement of momentum conservation since it gives the net external force (per unit mass) that could cause an air parcel's momentum to change. And if the individual forces that make up the net external force are not present or cancel each other out, the air parcel's momentum would not change.  While is an excellent start to applying Newton's law of motion to the motions of air parcels in Earth's atmosphere, it is incomplete for our purposes: That is because it is valid only for a non-accelerating coordinate system. But we want to analyze air parcel motions using the local Cartesian coordinate system, which is attached to the rotating Earth and therefore accelerates along with Earth! We will tackle the complication of Earth's rotation and consequent acceleration of the local Cartesian coordinate system in Chapter 4.  "
},
{
  "id": "ch3-section-newtons-laws-7",
  "level": "2",
  "url": "ch3-section-newtons-laws.html#ch3-section-newtons-laws-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inertia "
},
{
  "id": "ch3-section-newtons-laws-13",
  "level": "2",
  "url": "ch3-section-newtons-laws.html#ch3-section-newtons-laws-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conserved "
},
{
  "id": "ch3-section-newtons-laws-21",
  "level": "2",
  "url": "ch3-section-newtons-laws.html#ch3-section-newtons-laws-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "fundamental forces "
},
{
  "id": "ch3-section-newtons-laws-25",
  "level": "2",
  "url": "ch3-section-newtons-laws.html#ch3-section-newtons-laws-25",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector equation of motion vector momentum equation equation of motion momentum equation "
},
{
  "id": "ch3-section-newtons-laws-26",
  "level": "2",
  "url": "ch3-section-newtons-laws.html#ch3-section-newtons-laws-26",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "momentum conservation "
},
{
  "id": "references",
  "level": "1",
  "url": "references.html",
  "type": "References",
  "number": "4",
  "title": "References",
  "body": " References   Holton, J. R.  Hakim, G. J.  An Introduction to Dynamic Meteorology  Academic Press  2013   3rd edition     Kundu, P. K.  Cohen, I. M.  Dowling, D. R.  Fluid Mechanics  Academic Press  2016   6th edition     Marshall, J.  Plumb, R. A.  Atmosphere, Ocean and Climate Dynamics: An Introductory Text  Academic Press  2007    Martin, J. E.  Mid-latitude Atmospheric Dynamics: A First Course  Wiley  2006    Stull, R. B.  Practical Meteorology: An Algebra-based Survey of Atmospheric Science  University of British Columbia  2017   Version 1.02b     National Oceanic and Atmospheric Administration  National Aeronautics and Space Administration  United States Air Force  U.S. Standard Atmosphere, 1976  U.S. Government Printing Office  1976   "
},
{
  "id": "holton-hakim-6",
  "level": "2",
  "url": "references.html#holton-hakim-6",
  "type": "Note",
  "number": "4.1.1",
  "title": "",
  "body": " 3rd edition  "
},
{
  "id": "kundu-cohen-dowling-7",
  "level": "2",
  "url": "references.html#kundu-cohen-dowling-7",
  "type": "Note",
  "number": "4.2.1",
  "title": "",
  "body": " 6th edition  "
},
{
  "id": "stull-5",
  "level": "2",
  "url": "references.html#stull-5",
  "type": "Note",
  "number": "4.5.1",
  "title": "",
  "body": " Version 1.02b  "
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
