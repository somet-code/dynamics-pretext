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
  "body": " Continuum approximation  Earth's atmosphere is composed of a mixture of gases: molecular nitrogen ( ), molecular oxygen ( ), water vapor ( ), and others. Individual gas particles are very small, and much empty space generally lies between them on average. Each gas particle moves continuously and randomly, although larger-scale organized motion like wind can be superimposed on a collection of gas particles and dominate their overall motion.  Relatively few suspended liquid and solid particles like cloud droplets, ice crystals, and particulate matter occupy a small bit of the empty space between gas particles, with concentrations that vary in space and time. Briefly, precipitation particles reside in the atmosphere as they fall out of their parent clouds toward the ground.  Keeping track of the partially random motions of numerous discrete particles in Earth's atmosphere is unnecessary for our purposes, since even the smallest atmospheric motions we are interested in occur on scales multiple orders of magnitude larger than microscopic interparticle distances and affect many particles at once. Instead, we make use of the continuum approximation : We assume the atmosphere's mass is continuously distributed in space rather than held in discrete particles. This approximation is made for fluids when the length scale of a motion of interest is much larger than the average distance between particles making up the fluid (see the Knudsen number ), which is true for most atmospheric motions of interest.  Points within the atmospheric continuum are not geometric points without size, but instead are volume elements of any convenient shape that are much smaller than the atmospheric flows of interest within which they are caught up yet contain many discrete particles. An example of a volume element is shown in below.   A volume element in the shape of a rectangular prism. Its edges are parallel to the -, -, and -axes of the three-dimensional Cartesian coordinate system and give the element length , width , and height . Its center has coordinates .   Rectangular prism with center point and length, width, and height.    We assume the discrete particles contained within a volume element are distributed homogeneously through it. Local averages of temperature, pressure, density, velocity, and other state variables computed for the collection of particles contained within a volume element describe the volume element at any moment in time without reference to its history and are assumed to be uniform throughout the volume element. A representative value of any state variable is measured at the center of the volume element. For example, the pressure measured at the central point of a volume element is given by , as shown in below.   The volume element of , with pressure measured at its center.   Rectangular prism with measurement at center point and length, width, and height.    Some volume elements move through Earth's atmosphere with velocity (and we assume all discrete particles within the element move at this velocity). Other volume elements remain fixed to specific locations on Earth's surface or within its atmosphere while many mobile volume elements flow through their open boundaries with velocity . The former volume elements, whose paths through the atmosphere can be tracked over time, are called air parcels , air particles , material elements , or material volumes , and the portion of the atmosphere through which they move is called their environment . The latter volume elements, which are centered at permanent locations in the Earth system for all time, are called control volumes . These different types of volume elements lead to two different but connected frameworks from which we can conceptualize atmospheric flow: the Lagrangian framework and the Eulerian framework. We will explore these frameworks in .   below summarizes the essential components of the continuum approximation: shows a simple depiction of discrete particles in Earth's atmosphere, and shows volume elements imposed within the atmosphere, each containing many discrete particles.      A vertical cross-section through Earth's atmosphere, where the green rectangle represents the ground and blue circles represent discrete atmospheric particles.   Vertical cross-section through Earth's atmosphere, which is filled with discrete particles that become more spaced apart with height.     The atmospheric cross-section shown in is decomposed into volume elements, each of which contain multiple discrete particles.   Vertical cross-section through Earth's atmosphere, which is filled with discrete particles that become more spaced apart with height, with adjacent volume elements enclosing collections of discrete particles.      "
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
  "body": " A volume element in the shape of a rectangular prism. Its edges are parallel to the -, -, and -axes of the three-dimensional Cartesian coordinate system and give the element length , width , and height . Its center has coordinates .   Rectangular prism with center point and length, width, and height.   "
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
  "body": " Calculus   If we further assume state variables are described by differentiable functions of time and three-dimensional space (i.e., if we assume the values any given state variable takes on do not sharply jump from volume element to volume element, but instead vary continuously and smoothly in time and space), then we can apply calculus and differential equations to describe and predict changes in these atmospheric properties.  We will review relevant calculus below as well as introduce a twist on the chain rule for multivariable functions that helps us view atmospheric flow from different physical perspectives.    Partial differentiation  A function has an ordinary derivative denoted by (called Lagrange's notation or prime notation) or (called Leibniz's notation). \"Ordinary\" means is a function of only one independent variable.  In meteorology, we typically deal with more complicated functions of several independent variables denoting time and space.  Consider a state variable measured within an air parcel. While is depicted here as a scalar quantity for simplicity, be aware that it could represent a vector quantity.  To isolate the rate at which is changing as changes, we take the partial derivative of with respect to . This partial derivative is denoted by or ; the latter notation is preferred in this text.  When finding , we hold , , and constant. It follows that an alternative, explicit notation for the partial derivative of with respect to is     where the subscripts indicate which independent variables are held constant.  Likewise,           While the subscripts often will be omitted for brevity, we will use them whenever greater clarity about which independent variables are held constant is needed.    Vector algebra and calculus   Section 1.2.1 of Martin has a very thorough review of relevant vector algebra and calculus, and you should work through it carefully. A few especially important or possibly less familiar topics are briefly discussed next.    Right-hand rule  The right-hand rule is a convention used to define the orientations of coordinate axes and vectors. The -, -, and -axes of the three-dimensional Cartesian coordinate system are oriented perpendicular to each other following the right-hand rule ( ), and the right-hand rule determines the direction of the vector that results from the cross product of two other vectors ( ). See Wikipedia's right-hand rule page for instructions and visuals on how to use the right-hand rule either with your index and middle fingers and thumb or with curled fingers.      The right-hand rule applied to the -, -, and -axes of the three-dimensional Cartesian coordinate system, where the curved arrows show the sense of the right-hand rule for any combination of two axes.   Three straight orthogonal arrows representing the x-, y-, and z-axes of the Cartesian coordinate system, and curved arrows showing the sense of the right-hand rule for any combination of two axes.     The right-hand rule applied to the cross product (left) and the cross product (right), where the curved red arrows show the sense of the right-hand rule. Note the cross product is not commutative, so points in the opposite direction as .   (left) The cross product of two vectors and (right) the cross product of the same two vectors but in reverse order.      Two options for finding the orientation of the vector that results from the cross product of two other vectors by applying the right-hand rule to a human's right hand are shown in below. Make sure to use the right hand, not the left hand, or the results of your cross products will point opposite their correct directions!      The right-hand rule using the four non-thumb fingers that point together in the direction of vector , the palm that points in the direction of vector , and the thumb that points in the direction of the vector that results from the cross product of a human's right hand. Reproduced with modified vector annotations from P.wormer via Wikimedia Commons under CC BY-SA 3.0 .   The right-hand rule using the four fingers that point together in the direction of vector A, the palm that points in the direction of vector B, and the thumb that points in the direction of the vector that results from the cross product A x B of a human's right hand.     The right-hand rule using the index finger that points in the direction of vector , the middle finger that points in the direction of vector , and the thumb that points in the direction of the vector that results from the cross product of a human's right hand. Reproduced with modified vector annotations from Sepitropova via Wikimedia Commons under CC BY-SA 4.0 .   The right-hand rule using the index finger that points in the direction of vector A, the middle finger that points in the direction of vector B, and the thumb that points in the direction of the vector that results from the cross product A x B of a human's right hand.        Del  The operator , which is called del , nabla , or the gradient operator , is used to find the following important quantities.     The gradient of , , gives the magnitude and direction of the maximum change of the scalar field .    The divergence of , , gives the outward flux of the vector field .    The curl of , , gives the rotation of the vector field .    The Laplacian of , , gives the divergence of the gradient of the scalar field .    is called the Laplace operator . It occasionally is given by the symbol .        Del's important definitions and properties are described on Wikipedia's del page .    Properties of dot and cross products  We will employ several properties of dot and cross products in derivations. Wikipedia's dot product page and cross product page list many useful properties, and I recommend the reader refer to them as needed. Some properties we will use in derivations include     scalar multiplication with a cross product , where is a scalar;    the distributive property of a cross product over addition ; and    the vector triple product  and .        Taylor series   You learned in a calculus course that an infinitely differentiable function can be approximated by and sometimes perfectly represented by its Taylor series expansion at as given by       -order approximations  We often create an -order approximation of using its -order Taylor polynomial , which is the polynomial of degree formed from the partial sum of . For example, the first-order approximation of (also called its linear approximation ) is given by its first-order Taylor polynomial     and the second-order approximation of is given by its second-order Taylor polynomial     In many atmospheric dynamics applications, terms of second order and higher are grouped together as \" higher-order terms \" and are neglected in Taylor series expansions of state variables. Thus, state variables often are represented by their first-order approximations.     Total differentiation  Consider a state variable measured within an air parcel. Again, while is depicted here as a scalar quantity for simplicity, be aware that it could represent a vector quantity.  Since the air parcel's position changes with time as it moves through the atmosphere, , , and . Consequently, is a differentiable function of , and so we can quantify the time rate of change of within the air parcel by calculating . We do this using the chain rule for multivariable functions :     Since , simplifies to     where the terms have been rearranged to match standard presentations.   is the formula for the total derivative of .  Furthermore, , , and are the zonal , meridional , and vertical components of the air parcel's full (three-dimensional) velocity (i.e., wind) vector , respectively, and so becomes     Finally, we can use the gradient of , , to rewrite as     In most texts, is replaced with to emphasize this derivative differs from the ordinary derivative of a function of a single variable. Going forward, I will adopt this notation as shown in below to be consistent with standard presentations.     Since can be any scalar or vector state variable, we often write the total derivative as an operator:     where any state variable scalar or vector could be inserted into the parentheses.  Frequently, we use the following rearrangement of :     This arrangement more readily lends itself to physical interpretation. We interpret the terms of as follows.      is the Eulerian derivative (also called the local derivative ) that gives the rate at which is changing with respect to time at a fixed geographic point (i.e., at a specific location on Earth's surface or within its atmosphere) as air parcels move through that location. It is named after Leonhard Euler , who contributed significantly to fluid dynamics as well as mathematics, optics, astronomy, and other fields.     is the Lagrangian derivative (also called the total derivative , material derivative , substantial derivative , advective derivative , convective derivative , and individual derivative ) that gives the rate at which is changing with respect to time within a moving air parcel, following the air parcel as it moves through Earth's atmosphere. We can think of the Lagrangian derivative as describing sources and sinks of within the air parcel. Sometimes it is described as the time rate of change of \"following the motion\" or \"with the flow.\" It is named after Joseph-Louis Lagrange , who succeeded and collaborated with Euler and also made significant contributions to these fields.     is advection : the rate of importation at a fixed location by the wind of some atmospheric property carried within air parcels. In particular, advection gives the rate of change of the atmospheric property at a fixed location on Earth, due to the transport of air parcels by the wind through the location.   Be careful about the negative sign! The negative sign is part of the advection formula, and therefore for positive advection and for negative advection.    The negative of advection, (note the absence of the negative sign!), is called the convective derivative . Yes, this is confusing since the Lagrangian derivative also can be called the convective derivative. But in most sources, \"convective derivative\" refers to the negative of advection, not to the Lagrangian derivative.        For example, if we replace in with temperature (which means we implicitly are assuming ), we get     where is the local time rate of change of temperature (i.e., the local temperature tendency ), is the time rate of change of temperature within an air parcel caused by diabatic processes (i.e., it is the diabatic heating rate caused by radiative heating or cooling, latent heat release or absorption, conduction, and\/or mixing of air parcel and environmental air), and is temperature advection , where for warm advection and for cold advection.  The difference between Eulerian and Lagrangian derivatives is visualized in below.      In a Eulerian framework, state variables are measured within a control volume at a fixed location relative to Earth (dashed box) as air parcels (solid boxes) flow through its open boundaries.   An air parcel shown at three successive times as it passes through a control volume.     In a Lagrangian framework, state variables are measured within an air parcel as it moves through Earth's atmosphere.   An air parcel shown at three successive times as it moves through Earth's atmosphere.      It becomes clear from that the time rate of change of measured at a fixed location on Earth is due to the advection by the wind of air parcels through the location as well as the changes in inside the air parcels as they move through the location.  If , we say is conserved following the motion. In other words, remains constant within air parcels as they move through the atmosphere. But shows that, even if is conserved within air parcels, local changes in still can occur due to advection.  In summary, and give us two distinct but related frameworks by which we can measure the time rate of change of state variables: the Eulerian framework (i.e., the time rate of change measured at a fixed geographic location) and the Lagrangian framework (i.e., the time rate of change measured within a moving air parcel).   "
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
  "body": "Eulerian derivative local derivative Lagrangian derivative total derivative material derivative substantial derivative advective derivative convective derivative individual derivative sources sinks advection convective derivative "
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
  "body": " Finite differencing  Rarely do we know the form of the differentiable function that describes a given state variable. But thanks to meteorological instruments and numerical and artificial intelligence (AI) weather models, we do have discrete measurements of various state variable in space and time, and so we can apply finite differencing to approximate derivatives using discrete differences between measurements.  Consider the one-dimensional case first. If we have measurements of a state variable at a central point and two other points and each spaced from the central point, as shown in below, we can make the approximations     and     Note that is equivalent to the difference quotient of precalculus.   Adapted from Martin Figure 1.6. Example of centered differencing. Central point and equally-spaced surrounding points and , where is distance from . increases to the right.   A point in the middle of two equally-spaced points.    The method of approximating shown in is called centered differencing , and its formula comes from subtracting the Taylor Series expansion of at evaluated at from the Taylor series expansion of at evaluated at and then neglecting higher-order terms. See Martin (2006) Subsection 1.2.3 for derivations of and .  The reasoning of centered differencing can be applied to partial derivatives by only allowing one independent variable to change. For example, if we have a state variable , we can use centered differencing to approximate its first and second partial derivatives with respect to as     and     respectively.  Furthermore, it is not required that surrounding points be spaced at equal distances around a central point. For example,     and     are valid algorithms for approximating ordinary and partial derivatives, respectively, including in cases when and are not spaced at equal distances from . This more general case is shown in below. In fact, either or (but not both) could coincide with and these algorithms still would be valid!  Once again, is equivalent to the difference quotient of precalculus.   Reproduction of , but the surrounding points and are not equally spaced from the central point .   A point in the middle of two unequally-spaced points.    "
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
  "id": "ch1-section-finite-differencing-9",
  "level": "2",
  "url": "ch1-section-finite-differencing.html#ch1-section-finite-differencing-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "centered differencing "
},
{
  "id": "ch1-finite-difference",
  "level": "2",
  "url": "ch1-section-finite-differencing.html#ch1-finite-difference",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": " Reproduction of , but the surrounding points and are not equally spaced from the central point .   A point in the middle of two unequally-spaced points.   "
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
  "body": " Cartesian coordinate system  In , we used the Cartesian coordinate system (also called the rectangular coordinate system ) to identify the locations of volume elements in three-dimensional space. The location of the center of any volume element is given by the ordered triple , where , , and are its coordinates. These coordinates are signed distances from the origin measured parallel to the -, -, and -axes, respectively, which are mutually orthogonal and oriented relative to each other following the right-hand rule. Additionally, the unit direction vectors of the standard basis  , , and are parallel to the -, -, and -axes, respectively, and point in their positive directions.  An arbitrary vector is written in Cartesian coordinates in component form as or in unit vector form as . In either case, , , and are its , , and  components , respectively. Like coordinates, components are signed distances from the origin measured parallel to coordinate axes. When multiplied onto their corresponding unit direction vectors and summed, they result in the desired vector.  A position vector is drawn in Cartesian 3-space with its tail fixed to the origin and its tip attached to the center of a volume element of interest with coordinates .     If the volume element can move through space over time , its position vector is .    It follows that the volume element's velocity is given by , where , , and are the velocity components in the , , and directions, respectively.    It further follows that the volume element's acceleration is given by .     An example of a volume element with coordinates and position vector is shown in below.   A volume element depicted as a rectangular prism in Cartesian 3-space with central coordinates and position vector . Dashed lines shown signed distances of the volume element from the origin drawn parallel to the -, -, and -axes. These signed distances correspond to the element's coordinates and its position vector's components.   The position vector of a volume element in Cartesian 3-space, with signed distances from the origin depicting the magnitudes and directions of its components.    "
},
{
  "id": "ch2-section-cartesian-coordinates-2",
  "level": "2",
  "url": "ch2-section-cartesian-coordinates.html#ch2-section-cartesian-coordinates-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cartesian coordinate system rectangular coordinate system unit direction vectors standard basis "
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
  "body": " A volume element depicted as a rectangular prism in Cartesian 3-space with central coordinates and position vector . Dashed lines shown signed distances of the volume element from the origin drawn parallel to the -, -, and -axes. These signed distances correspond to the element's coordinates and its position vector's components.   The position vector of a volume element in Cartesian 3-space, with signed distances from the origin depicting the magnitudes and directions of its components.   "
},
{
  "id": "ch2-section-spherical-coordinates",
  "level": "1",
  "url": "ch2-section-spherical-coordinates.html",
  "type": "Section",
  "number": "2.2",
  "title": "Spherical coordinate systems",
  "body": " Spherical coordinate systems  You learned in your multivariable calculus course about a standard spherical coordinate system that builds upon the Cartesian coordinate system. In this spherical coordinate system, the location of a point in three-dimensional space is given by the coordinates .      is the radial distance : the distance measured outward to the point from the origin.     is the polar angle (also called the azimuthal angle ): the angle measured counter-clockwise from the -axis to the projection of the point into the -plane. This same polar angle is used in standard polar (two-dimensional) and cylindrical (three-dimensional) coordinate systems.     is the zenith angle : the angle measured downward from the -axis to the line connecting the origin to the point.     Earth is nearly spherical and can be approximated as a sphere in most meteorological applications. We use Earth's mean radius  as the radius of this hypothetical spherical Earth; it also defines Earth's mean sea level. Holton & Hakim give the value of as 6370 km, while other sources give slightly different values. We will use Holton & Hakim's value of in this course.  Rather than use the standard spherical coordinate system to describe the locations of volume elements on Earth's surface and within its atmosphere, we instead use a geographic coordinate system in which the location of an element is given by the coordinates .      is longitude : the angle measured horizontally counter-clockwise from the Prime Meridian to the projection of the element's center point onto Earth's surface.     is latitude : the angle measured horizontally toward the North Pole from the Equator to the projection of the element's center point onto Earth's surface.     is height : the radial distance measured from Earth's center to the element's center point.     Curves of longitude ( meridians ) and curves of latitude ( parallels ) are shown in below.   Parallels of latitude (left) and meridians of longitude (right) labeled at 30° increments relative to the Equator and Prime Meridian, respectively. Reproduced from Djexplo via Wikimedia Commons under CC0 1.0 Universal Public Domain Dedication .   Curves of latitude and longtiude on a spherical Earth at 30° increments relative to the Equator and Prime Meridian, respectively.    Meteorologists typically express as the sum of Earth's mean radius and geometric height  , which is the signed radial distance above Earth's mean sea level, as . is referred to as elevation when it describes the height of a point on Earth's surface, altitude when it describes the height of a point within Earth's atmosphere, and depth when it describes the height of a point within Earth's oceans or otherwise below its surface.  An example of a volume element within Earth's atmosphere with coordinates according to the geographic coordinate system described above is shown in below.   A volume element within Earth's atmosphere depicted as a rectangular prism in geographic 3-space with central coordinates . Earth is depicted as a sphere. Thick black labeled curves show the Equator and Prime Meridian. Dashed curves show the meridian and parallel for the volume element. Dashed lines show Earth's mean radius and angles corresponding to longitude and latitude for the volume element. The dotted line shows the volume element's geometric height . Note the volume element would be located on Earth's surface if .   The position of a volume element in Earth's atmosphere in geographic 3-space, with latitude and longitude and geometric height.    "
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
  "id": "ch2-section-spherical-coordinates-5",
  "level": "2",
  "url": "ch2-section-spherical-coordinates.html#ch2-section-spherical-coordinates-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "geographic coordinate system "
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
  "body": " Local Cartesian coordinate system   We combine the Cartesian coordinate system with the geographic coordinate system described previously to create the local Cartesian coordinate system . The word \"local\" has the same meaning here as it does for the local derivative of Chapter 1 : It refers to a fixed location on Earth.  We place the origin of the local Cartesian coordinate system at any point of interest fixed to the planet's surface ( ) or within its atmosphere ( ). This point is identified by geographic coordinates . Note this point rotates along with Earth about Earth's polar axis!   Equatorial projections showing the unit direction vectors , , and of the local Cartesian coordinate system placed at a point on Earth's surface in and a point within Earth's atmosphere in , where \"point\" refers to a volume element. The points have the same latitude as shown and the same longitude that, while not shown, corresponds to the right-half of the curve of Earth's surface. The Equator is labeled EQ and the North Pole is labeled NP. Earth's mean radius is given by and the point's geometric height in is given by . The point's radial distance from Earth's polar axis is given by in and in .      A point on Earth's surface with the local Cartesian coordinate system placed at that point.       A point within Earth's atmosphere with the local Cartesian coordinate system placed at that point.      The local Cartesian coordinate system has the following characteristics.      increases (decreases) to the local east (west), parallel to curves of latitude.    varies directly with .    According to the arc length formula, a small change in is given by along Earth's surface ( ) and by within Earth's atmosphere ( ).        increases (decreases) to the local north (south), parallel to curves of longitude.    varies directly with .    According to the arc length formula, a small change in is given by along Earth's surface ( ) and by within Earth's atmosphere ( ).        increases (decreases) locally upward (downward), perpendicular to Earth's mean sea level.     points to the local east, parallel to the -axis.     points to the local north, parallel to the -axis.     points locally upward, parallel to the -axis.     is the zonal component of velocity and is positive (negative) for westerly (easterly) flow. (Remember wind is named for the direction it blows from , not toward!)     is the meridional component of velocity and is positive (negative) for southerly (northerly) flow.     is the vertical component of velocity and is positive (negative) for upward (downward) motion.      North polar projection showing the geometric relationship between arc and longitudinal displacement at latitude measured along Earth's surface in and within Earth's atmosphere in . The North Pole is labeled NP. The radial distance from Earth's polar axis is given by in and in .      Arc length along Earth's surface at a fixed latitude and its corresponding longitudinal displacement.       Arc length within Earth's atmosphere at a fixed latitude and its corresponding longitudinal displacement.       Equatorial projection showing the geometric relationship between arc and latitudinal displacement at longitude measured along Earth's surface in and within Earth's atmosphere in . The longitude , while not shown, corresponds to the right-half of the curve of Earth's surface. The Equator is labeled EQ and the North Pole is labeled NP.      Arc length along Earth's surface at a fixed longitude and its corresponding latitudinal displacement.       Arc length within Earth's atmosphere at a fixed longitude and its corresponding latitudinal displacement.      A very simplified depiction of the correspondence between the directions and velocity components of the local Cartesian Coordinate system is shown in below.   Simplified depiction of the direct correspondence between the zonal ( ), meridional ( ), and vertical ( ) directions (left) and the zonal ( ), meridional ( ), and vertical ( ) velocity components (right), respectively, of the local Cartesian coordinate system. Reproduced from Fig. 1.1 of Stull (2017) under CC BY-NC-SA 4.0 .   Directions (left) and velocity components (right) of the local Cartesian coordinate system.      Note on rotation, sphericity, and the local Cartesian coordinate system  A difficulty of using the local Cartesian coordinate system is that its -, -, and -axes and their corresponding , , and unit direction vectors, respectively, placed at any location fixed relative to Earth change orientation in space as Earth rotates. We will tackle this complication in Chapter 3.  Another difficulty of using the local Cartesian coordinate system is that its -, -, and -axes and their corresponding , , and unit direction vectors, respectively, change orientation in space depending on the longitude and latitude of the location at which the origin of the coordinate system is placed, as shown in below. We will tackle this complication in Chapter 5.   Examples of the local Cartesian coordinate system unit direction vectors , , and when the origin of the coordinate system is placed at different locations on Earth's surface along a line of latitude (horizontal dashed curve) and a line of longitude (vertical dashed curve) as well within Earth's atmosphere (dashed line). Note the orientations of the unit direction vectors in space change depending on the placement of the origin.   Unit direction vectors at points with different latitude, longitude, and height on Earth's surface and in its atmosphere.     "
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
  "body": " Examples of the local Cartesian coordinate system unit direction vectors , , and when the origin of the coordinate system is placed at different locations on Earth's surface along a line of latitude (horizontal dashed curve) and a line of longitude (vertical dashed curve) as well within Earth's atmosphere (dashed line). Note the orientations of the unit direction vectors in space change depending on the placement of the origin.   Unit direction vectors at points with different latitude, longitude, and height on Earth's surface and in its atmosphere.   "
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
  "body": " Gravitational force  The gravitational force  [N] is an attractive force between the centers of two masses. Newton's law of universal gravitation gives the magnitude of the gravitational force:     where [m] is the distance between the centers of masses [kg] and [kg] and  is the gravitational constant .  For an air parcel attracted to Earth by its gravitational force ( ), we can replace with the air parcel's mass and with Earth's mass . Then and the definition of the gravitational force as an attractive force dictate     where now represents the distance between the air parcel's center of mass and Earth's center of mass and is the position vector that points from Earth's center of mass to the air parcel's center of mass. (Note is a unit vector, since , and so it gives direction to the gravitational force without affecting its magnitude.) In this context, is Earth's gravitational force acting on the air parcel, which is directed toward Earth's center of mass.  If we further assume Earth is spherical with radius , becomes     where [m] is air parcel's geometric height.  Dividing by produces the gravitational force per unit mass acting on the air parcel, which is called the gravitational acceleration  [ ]:         A wide view of Earth's gravitational force attracting the air parcel from toward the planet's center of mass.   Air parcel attracted to Earth by gravitational force.     A zoomed-in view of Earth's gravitational force acting on the center of mass of the air parcel from toward the planet's center of mass.   Air parcel attracted to Earth by gravitational force.      "
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
  "id": "ch3-section-gravitational-force-11",
  "level": "2",
  "url": "ch3-section-gravitational-force.html#ch3-section-gravitational-force-11",
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
  "body": " Pressure gradient force   Pressure [Pa] is the magnitude of a force applied perpendicular to a surface divided by the area of the surface:   ,  where is the pressure and [N] is the magnitude of the force applied perpendicular to a surface with area [ ].   Fluid pressure is caused by the combined forces of numerous discrete fluid particles colliding with a surface of any orientation placed anywhere within the fluid, and it is compressive. Atmospheric pressure is fluid pressure caused by the collisions of atmospheric particles with surfaces.  The air parcel from experiences such combined compressive forces perpendicular to each of its six faces, as represented by the force vectors in below. The pressure at its center results. Note if the air parcel was a different shape, it still would experience these forces perpendicular to its bounding surface(s), which would result in the same central pressure.   Vectors represent the combined compressive forces from discrete atmospheric particles colliding with the six faces of the air parcel from , creating pressure measured at its center. Note the vectors point inward toward the center of the air parcel since atmospheric pressure is compressive.   Rectangular prism with pressure measured at center point and forces compressing all faces.    For simplicity, consider only the forces acting on the left and right sides of the air parcel from , denoted and , respectively, as shown in below.   The air parcel from with only the combined compressive forces and acting on the left and right faces of the air parcel, respectively.   Rectangular prism with pressure measured at center point and forces compressing the left and right faces.    We can create a linear approximation of each of these forces using a Taylor series expansion of pressure from the center of the air parcel to its left and right faces and neglecting the higher order terms.        where is evaluated at the center of the air parcel, i.e., . Note is positive since it points in the -direction and is negative since it points in the -direction.  Adding and produces the net force in the -direction :     Since , we can write the net force per unit mass in the -direction by dividing by :     Similarly, we can write the net forces per unit mass in the - and -directions as     and     respectively.  Note each of these accelerations depends on a spatial derivative of pressure, or a pressure gradient , but not on a specific value of pressure.  We combine the three component accelerations of into the pressure gradient force (PGF) per unit mass , or the pressure gradient acceleration :     where is the PGF and is the pressure gradient acceleration.  A gradient vector points from lower values toward higher values of the scalar quantity of interest, in the direction of fastest increase. Visually, a gradient vector points locally perpendicular to isopleths (contours of constant value) of the scalar quantity of interest toward higher values, and its magnitude reflects the size of the gradient: Isopleths are spaced closer together where the gradient is larger.  It follows that the pressure gradient vector points from lower to higher values of pressure, in the direction of fastest increase, locally perpendicular to isobars (contours of constant pressure), and its magnitude increases as the size of the pressure gradient increases, leading to a stronger PGF. But the negative sign in means the pressure gradient force vector and, likewise, the pressure gradient acceleration vector point in the opposite direction as the pressure gradient vector. These principles are visualized in below.   Three isobars of pressure with values (middle), (top), and (bottom), where the increment of pressure is positive. The pressure gradient vectors point locally perpendicular to the isobars away from the lower value of pressure denoted by the isobar and toward the higher value of pressure denoted by the isobar. The pressure gradient force vectors point locally perpendicular to the isobars away from the higher value of pressure denoted by the isobar and toward the lower value of pressure denoted by the isobar. Both vectors are longer (shorter) on the right (left) side of the image where the isobars are spaced closer together (spread further apart), indicating a stronger (weaker) pressure gradient.   Three isobars spaced further apart on the left and closer together on the right, with pressure gradient and pressure gradient vectors shown at the left and right. The vectors are shorter on the left and longer on the right.    "
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
  "body": "Fluid pressure Atmospheric pressure "
},
{
  "id": "ch3-airparcel-pressure-forces",
  "level": "2",
  "url": "ch3-section-pressure-gradient-force.html#ch3-airparcel-pressure-forces",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": " Vectors represent the combined compressive forces from discrete atmospheric particles colliding with the six faces of the air parcel from , creating pressure measured at its center. Note the vectors point inward toward the center of the air parcel since atmospheric pressure is compressive.   Rectangular prism with pressure measured at center point and forces compressing all faces.   "
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
  "id": "ch3-section-pressure-gradient-force-23",
  "level": "2",
  "url": "ch3-section-pressure-gradient-force.html#ch3-section-pressure-gradient-force-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pressure gradient "
},
{
  "id": "ch3-section-pressure-gradient-force-24",
  "level": "2",
  "url": "ch3-section-pressure-gradient-force.html#ch3-section-pressure-gradient-force-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pressure gradient force (PGF) per unit mass pressure gradient acceleration "
},
{
  "id": "ch3-section-pressure-gradient-force-27",
  "level": "2",
  "url": "ch3-section-pressure-gradient-force.html#ch3-section-pressure-gradient-force-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "isopleths "
},
{
  "id": "ch3-section-pressure-gradient-force-28",
  "level": "2",
  "url": "ch3-section-pressure-gradient-force.html#ch3-section-pressure-gradient-force-28",
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
  "body": " Viscous friction force   Forces acting on the surface of an air parcel can cause the air parcel to deform (change shape and possibly size) through tension, compression, and\/or shear. We express such deforming forces acting on a unit area of the parcel as stress  [Pa], which is measured using the same units as pressure.  Forces can act on any of the six faces of the air parcel from , and they can act in three orthogonal directions on each face, thereby creating stress. In below, the three vectors attached to each face of the air parcel represent the three orthogonal directions, parallel to the coordinate axes, in which a force can act on a given face.   Vectors represent the three orthogonal directions in which forces acting on the six faces of the air parcel from can be directed, thereby creating stress.   Rectangular prism with forces acting in all three directions on all faces.    While stress is caused by external forces, it translates internally through the air parcel via viscosity. Viscosity expresses how much a fluid like air resists deformation due to interactions such as collisions between its own particles. Its value depends on the fluid's molecular makeup as well as its thermodynamic state, and it often is measured using the dynamic viscosity  [Pa s], where larger values of reflect higher viscosity.  When faster-moving particles of a fluid collide with slower-moving particles of the same fluid, they transfer some of their momentum to the slower-moving particles. This causes the faster-moving particles to slow down while the slower-moving particles speed up. Thus, through momentum transfer between adjacent particles, viscosity minimizes velocity differences within a fluid. The higher the viscosity of the fluid, the more effectively momentum transfer reduces velocity differences within the fluid.  If the air parcel of is at rest relative to its environment, it only experiences deformation due to the forces of discrete particles randomly colliding with its bounding surface(s), which collectively are expressed per unit area as pressure and are compressive, as discussed previously in . But if there is relative motion between the air parcel and its environment due to fluid flow, the air parcel can experience additional (normal and tangential) stresses due to fluid velocity gradients (i.e., wind shear ) that translate through it via viscosity. We deem the sum total of these additional deforming forces the viscous friction force or sometimes simply the viscous force , the friction force , or the frictional force .  The components of the viscous friction force per unit mass are given by     where is the viscous friction force in the direction, is the viscous friction force per unit mass, or the viscous friction acceleration, in the direction, and [ ] is the kinematic viscosity .  We combine the three component accelerations of into the viscous friction force per unit mass , or the viscous friction acceleration :     where is the viscous friction force and is the viscous friction acceleration.  The complete derivation of and is beyond the scope of this course: See Kundu et al. (2016) for a detailed derivation. Martin (2006) presents a simplified derivation of in his Subsection 2.1.3; since the viscous friction force can be neglected in most meteorological applications, as discussed below, I refer you to his derivation rather than reproduce it here.  The dependence of the viscous friction force on the air parcel's velocity as shown in means the viscous friction force is present only in moving air. Furthermore, the second-order derivatives encompassed by the Laplacian of , , and shown explicitly for each component of in , mean the viscous friction force is present only in moving fluids with nonlinear velocity profiles.  Air has extremely low viscosity. For altitudes relevant to the large majority of meteorological applications, the dynamic viscosity of air is largest next to Earth's surface where the air is densest, pressure is highest, and temperature in the troposphere generally is warmest: According to the U.S. Standard Atmosphere (1976) , under average conditions, Pa s next to Earth's surface and decreases linearly through the troposphere. For comparison, the dynamic viscosity of water is about 100 times larger. Consequently, the viscous friction force is negligibly small in atmospheric motions occurring more than a few millimeters above the surface.  As a brief note, the extreme wind shear that occurs next to Earth's surface, due to the drag Earth's surface exerts on the air, easily overcomes the air's small viscosity and effects momentum transfer through a much greater depth up to a few kilometers during the daytime! via turbulence . Turbulence is not of focus in this course, but it is an interesting and meteorologically significant topic you will return to in future courses.    Couette flow   Couette flow , which is the flow of a viscous fluid bounded between two surfaces moving tangentially relative to each other, often is used to visualize shear stress (also called tangential stress ). The set-up of steady planar Couette flow is shown in below.   Vertical cross-section in the -plane depicting two surfaces (gray rectangles) of infinite length (in the -direction) and width (in the -direction, not shown but perpendicular to the screen) separated by vertical distance and bounding a horizontally infinite viscous fluid of depth . The lower surface is fixed (as indicated by the hatching) and the upper surface moves to the right in the -direction at velocity . The blue dashed arrows represent steady planar Couette flow in the fluid. The solid blue lines give the vertical profile of the horizontal velocity .   Fluid bounded between two surfaces moving tangentially relative to each other, with the lower surface fixed and the upper surface moving to the right, with horizontal flow in the fluid between the two surfaces.    The upper surface drags the fluid particles directly below it: You could think of these particles as constituting an infinitesimally thin layer of fluid directly below the upper surface. This causes the layer of fluid in contact with the upper surface to move to the right at with the surface. The upper layer of fluid drags the layer of fluid directly below it due to viscosity, and that layer of fluid drags the layer of fluid directly below it due to viscosity, and so on to the bottom of the fluid. Likewise, the lower surface drags the fluid particles directly above it, causing that layer of fluid to also be motionless. The lower layer of fluid drags the layer of fluid directly above it due to viscosity, and that layer of fluid drags the layer of fluid directly above it due to viscosity, and so on to the top of the fluid. After a time, steady state (i.e., ) is achieved through this downward momentum transfer by the fluid particles. The resulting vertical profile of the horizontal velocity is     The shear stress for a Newtonian fluid which air can be approximated as has been determined empirically to be linearly related to velocity gradients within the fluid, as expressed by Newton's law of viscosity . For planar Couette flow, this produces     where the first subscript indicates the direction of the normal vector of the cross-sectional area upon which stress is acting (also the flow velocity component under consideration) and the second subscript indicates the direction in which the stress acts (also the direction in which the flow is sheared). represents the external force per unit area that must be applied to the upper surface to keep it moving at a constant rate despite the viscous fluid dragging it back.  Note that in this simple case of steady planar Couette flow is constant since . Thus, it follows that no viscous friction force is experienced by the fluid: Since is a linear function of , .  But if was nonlinear, such as is the case soon after the upper surface begins moving forward and before steady state is achieved, and the fluid would experience a non-zero viscous friction force that progressively nudges it toward steady planar Couette flow. Thus, viscosity acts to dampen velocity gradients.   "
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
  "id": "ch3-section-friction-force-2-16",
  "level": "2",
  "url": "ch3-section-friction-force.html#ch3-section-friction-force-2-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "turbulence "
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
  "body": " Vertical cross-section in the -plane depicting two surfaces (gray rectangles) of infinite length (in the -direction) and width (in the -direction, not shown but perpendicular to the screen) separated by vertical distance and bounding a horizontally infinite viscous fluid of depth . The lower surface is fixed (as indicated by the hatching) and the upper surface moves to the right in the -direction at velocity . The blue dashed arrows represent steady planar Couette flow in the fluid. The solid blue lines give the vertical profile of the horizontal velocity .   Fluid bounded between two surfaces moving tangentially relative to each other, with the lower surface fixed and the upper surface moving to the right, with horizontal flow in the fluid between the two surfaces.   "
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
  "body": " Newton's laws of motion  Now that we have explored the individual forces acting on the air parcel of , we can combine them using Newton's laws of motion.   Newton's laws of motion often are phrased in some variation of the following.      law: An object remains at rest or in motion at constant velocity unless acted on by a non-zero net external force.     law: The net external force acting on an object equals the time rate of change of the object's momentum.     law: Whenever one object exerts a force on a second object, the second object exerts an equal and opposite force on the first object.      Stull (2017) (p. 292) shares translations of these laws from Newton's The Mathematical Principles of Natural Philosophy (directly quoted).      law: Every body perseveres in its state of being at rest or of moving uniformly straight forward, except inasmuch as it is compelled by impressed forces to change its state.     law: Change in motion is proportional to the motive force impressed and takes place following the straight line along which that force is impressed.     law: To any action, there is always a contrary, equal reaction; in other words, the actions of two bodies each upon the other are always equal and opposite in direction.     Newton's law of motion has come to define inertia , which is the tendency described above.  Newton's law of motion follows from the law and can be expressed mathematically as     where is the net force that results from the sum of all external forces acting on the object of interest and [ ] is the object's momentum.  Substituting the definition of momentum into and applying the product rule produces     If the object's mass is conserved (constant), which is the usual assumption,     and consequently reduces to the simpler, more common form of Newton's law of motion:     where is the object's acceleration.  Dividing by the object's mass isolates the object's acceleration:     Using acceleration rather than force is preferable in meteorology since it is not reasonable to measure the mass of an air parcel (our object of interest).  For an air parcel as described in this chapter, assuming its mass is constant (which is the typical assumption, and which we will revisit in Chapter 6 when exploring mass conservation), we can combine the effects of the fundamental forces discussed in this chapter on it to expand the left side of as follows:     Furthermore, since the acceleration of the air parcel is given by , can be written as     which we call the vector equation of motion or the vector momentum equation , or simply the singular equation of motion or momentum equation .   is a statement of momentum conservation since it gives the net external force (per unit mass) that could cause an air parcel's momentum to change. And if the individual forces that make up the net external force are not present or cancel each other out, the air parcel's momentum would not change.  While is an excellent start to applying Newton's law of motion to the motions of air parcels in Earth's atmosphere, it is incomplete for our purposes: This is because it is valid only for a non-accelerating coordinate system. But we want to analyze air parcel motions using the local Cartesian coordinate system, which is attached to the rotating Earth and therefore accelerates along with the planet! We will tackle the complication of Earth's rotation and consequent acceleration of the local Cartesian coordinate system in .  "
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
  "id": "ch3-section-selected-references",
  "level": "1",
  "url": "ch3-section-selected-references.html",
  "type": "Section",
  "number": "3.5",
  "title": "Selected references",
  "body": " Selected references     Chapter 2 of Martin (2006) : See tentative course schedule for specific readings.    Chapter 1 of Holton and Hakim (2013) : See tentative course schedule for specific readings.    Chapter 6 of Marshall and Plumb (2007)     Chapter 4 of Bluestein (1992)     Chapters 1 and 4 of Kundu et al. (2016)      "
},
{
  "id": "ch4-section-relative-motion",
  "level": "1",
  "url": "ch4-section-relative-motion.html",
  "type": "Section",
  "number": "4.1",
  "title": "Relative motion",
  "body": " Relative motion  Imagine you are standing outside the National Weather Center watching traffic on Jenkins Ave. For fun, you use a radar speed gun to measure the speed of a car driving toward you. (Assuming perfect conditions, this matches the speed displayed on the car's speedometer and is measured using the Doppler effect like weather radar!)  Simultaneously, a fellow student who is walking toward you along Jenkins Ave. uses another radar speed gun to measure the speed of the same car as it drives toward them.  Using to represent you the stationary observer, to represent the walking observer, and to represent the car, we have     where is the velocity of the car as measured by you the stationary observer, is the velocity of the car as measured by the walking observer, and is the velocity at which the fellow student walks toward you.  This brief overview of relative motion that different observers can measure different velocities for the same moving object due to their own motions is extended in the next section using the concept of reference frames.  "
},
{
  "id": "ch4-section-relative-motion-7",
  "level": "2",
  "url": "ch4-section-relative-motion.html#ch4-section-relative-motion-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "relative motion "
},
{
  "id": "ch4-section-reference-frames",
  "level": "1",
  "url": "ch4-section-reference-frames.html",
  "type": "Section",
  "number": "4.2",
  "title": "Inertial and non-inertial reference frames",
  "body": " Inertial and non-inertial reference frames  A reference frame is a coordinate system used to investigate the behavior of a phenomenon of interest in terms of its position, velocity, and acceleration. For example, meteorologists most often use the local Cartesian coordinate system described in as a frame of reference to investigate atmospheric phenomena.  A non-accelerating reference frame is called an inertial reference frame or an absolute reference frame . An inertial reference frame can be stationary, or it can translate at constant velocity (i.e., its speed and direction of travel cannot change).  An accelerating reference frame is called a non-inertial reference frame . Such a reference frame changes speed and\/or direction relative to an inertial reference frame.  To visualize the relationship between inertial and non-inertial reference frames, consider a fair weather cumulus cloud as shown in below. As an observer stands on Earth's surface, they perceive the cloud to be drifting slowly with the wind at velocity because they and the cloud both are rotating along with the planet ( ); in other words, they view the cloud from a non-inertial reference frame. But a stationary observer in space perceives the cloud to be zipping along rapidly with Earth's rotation, with its much slower wind-driven drift superimposed ( ), because they view the cloud from an inertial reference frame.      An observer standing on Earth's surface who is stationary relative to the rotating planet observes a fair-weather cumulus cloud drifting slowly with the wind at horizontal velocity .   Person standing beneath a cumulus cloud that is moving to the right with the wind.     A stationary observer in space sees the cloud's wind-driven drift superimposed on its rapid rotation with the planet, which rotates with angular velocity and thereby gives the cloud an additional tangential velocity.   Astronaut views a cloud on Earth from space. The cloud both drifts to the east with the wind and rotates with the planet.      Newton's and laws of motion the basis for fluid dynamics and which we overviewed in are directly valid only in inertial reference frames. Therefore, from mathematically depicts the acceleration of an air parcel as viewed from an inertial reference frame. In other words, the stationary observer in space could apply from to explain the motion of the cloud. But we live on the rotating Earth, and therefore we observe the weather as we and atmospheric phenomena alike rotate along with the planet. Thus, it imperative that we be able to quantify atmospheric motions from this non-inertial reference frame.  Luckily, we can do this by accounting for additional forces called inertial forces , apparent forces , or fictitious forces in Newton's and laws of motion that are induced by accelerations of non-inertial reference frames.  While non-inertial reference frames can accelerate by translating through space at a variable rate, rotating, or both, we will focus on a reference frame that accelerates only by rotating as this is most relevant to investigating atmospheric motions on Earth and the inertial forces that arise in it.  Since Earth rotates, the local Cartesian coordinate system described in is a non-inertial reference frame that accelerates by constantly changing orientation in space. But we do not intuit Earth's rotation as we live our lives and view the weather because we and everything else on the planet rotate at the same rate. Consequently, motions on Earth including in Earth's atmosphere appear to us to be inertial: Objects at rest or moving at constant velocity appear to remain so unless acted upon by an external force. (But remember their acceleration along with the planet would be quite apparent to a stationary observer in space!) As we go along in this topic, we will assign to these motions that appear inertial to us but really are non-inertial velocity , where the subscript \"rot\" indicates they are viewed from the (non-inertial) rotating reference frame.  If instead we were to observe these same motions on Earth from a fixed point in space, we would see they include rotation along with the planet, and we would assign to them velocity = + , where [ ] is Earth's angular velocity and [ ] is the tangential velocity imposed by Earth's rotation. The subscript \"abs\" indicates the motions are viewed from the inertial (absolute) reference frame.  We derive these and related useful expressions in the next sections.  "
},
{
  "id": "ch4-section-reference-frames-2",
  "level": "2",
  "url": "ch4-section-reference-frames.html#ch4-section-reference-frames-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "reference frame "
},
{
  "id": "ch4-section-reference-frames-3",
  "level": "2",
  "url": "ch4-section-reference-frames.html#ch4-section-reference-frames-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inertial reference frame absolute reference frame "
},
{
  "id": "ch4-section-reference-frames-4",
  "level": "2",
  "url": "ch4-section-reference-frames.html#ch4-section-reference-frames-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "non-inertial reference frame "
},
{
  "id": "ch4-relative-motion",
  "level": "2",
  "url": "ch4-section-reference-frames.html#ch4-relative-motion",
  "type": "Figure",
  "number": "4.2.1",
  "title": "",
  "body": "    An observer standing on Earth's surface who is stationary relative to the rotating planet observes a fair-weather cumulus cloud drifting slowly with the wind at horizontal velocity .   Person standing beneath a cumulus cloud that is moving to the right with the wind.     A stationary observer in space sees the cloud's wind-driven drift superimposed on its rapid rotation with the planet, which rotates with angular velocity and thereby gives the cloud an additional tangential velocity.   Astronaut views a cloud on Earth from space. The cloud both drifts to the east with the wind and rotates with the planet.     "
},
{
  "id": "ch4-section-reference-frames-8",
  "level": "2",
  "url": "ch4-section-reference-frames.html#ch4-section-reference-frames-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inertial forces apparent forces fictitious forces "
},
{
  "id": "ch4-section-reference-frames-11",
  "level": "2",
  "url": "ch4-section-reference-frames.html#ch4-section-reference-frames-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Earth's angular velocity "
},
{
  "id": "ch4-section-rotating-reference-frame",
  "level": "1",
  "url": "ch4-section-rotating-reference-frame.html",
  "type": "Section",
  "number": "4.3",
  "title": "Rotating reference frame",
  "body": " Rotating reference frame  Consider a vector in three-dimensional space. Any coordinate system (e.g., Cartesian, local Cartesian, cylindrical, standard spherical) could serve as a reference frame to investigate . While the unit direction vectors of coordinate systems differ, and consequently the components of a given vector differ among coordinate systems, all coordinate systems can be used to describe the same vector.  Consider two Cartesian coordinate systems: One is non-accelerating, and the other is rotating relative to the first with constant angular velocity . The former is an inertial reference frame and will be indicated by the subscript \"abs\". The latter is a non-inertial reference frame and will be indicated by the subscript \"rot\".  The inertial coordinate system is assigned unit direction vectors , , and , and the rotating coordinate system is assigned unit direction vectors , , and .  In the inertial coordinate system     and in the rotating coordinate system     Both and are equally valid expressions for : Even though the values of their components differ, they each describe the same vector. In other words, although the values of their components differ, they each have the same magnitude and point with the same orientation.  Let change with time, i.e., let . In the inertial coordinate system, which itself is not accelerating and therefore has unchanging unit direction vectors,     We call the expression on the right-hand side of  since it describes how is changing with time relative to the inertial coordinate system:      and make it clear that     Since the rotating coordinate system itself accelerates, its unit direction vectors change orientation with time relative to the inertial coordinate system, and so by the product rule,     We call the first expression in parentheses on the right-hand side of  since it describes how is changing relative to the rotating coordinate system:     But because of the second expression in parentheses on the right-hand side of , and make it clear that     The second expression in parentheses on the right-hand side of arises because the unit direction vectors rotate with their coordinate system at . It follows from the definition of tangential velocity for uniform circular motion     that           (The full derivation of these terms is shown in .) Therefore, the second expression in parenthesis on the right-hand side of becomes     where the scalar multiplication property of the cross product     as well as its distributive property over addition have been used (review these properties in ).  Thus, becomes     and equating and reveals      says the time rate of change of an arbitrary vector relative to an inertial reference frame is due to the time rate of change of the vector relative to a rotating reference frame as well as to the rotation of that reference frame; in particular, it results from their sum.  "
},
{
  "id": "ch4-section-application-earth",
  "level": "1",
  "url": "ch4-section-application-earth.html",
  "type": "Section",
  "number": "4.4",
  "title": "Application of a rotating reference frame to Earth",
  "body": " Application of a rotating reference frame to Earth  While either side of is equivalent to , we are most interested in the expression on its right-hand side because we live on the rotating Earth and view atmospheric phenomena as we and the phenomena rotate along with the planet. Going forward, associate the rotating coordinate system with Earth by interpreting as Earth's angular velocity, which is directed parallel to Earth's axis of rotation and points from the South Pole toward the North Pole. The associated angular speed is     where s is the length of a sidereal day , which is the time it takes for Earth to rotate once relative to the distant stars. (A sidereal day is slightly shorter than a solar day because Earth orbits the Sun as it rotates on its axis of rotation.)   in is arbitrary, so we can replace it with any vector of interest. Let's replace with position vector that points from Earth's center to an air parcel of interest as it moves through Earth's atmosphere:     As we reviewed in ,     Inserting this definition into produces      is the velocity of the air parcel measured relative to the inertial reference frame. According to , is equivalent to the velocity of the air parcel measured relative to the rotating reference frame (i.e., the velocity of the air parcel relative to Earth, which is the wind) summed with the tangential velocity imparted to the air parcel by the rotation of the reference frame     (i.e., the velocity of the air parcel due to Earth's rotation). The relationship in could be written as     to emphasize is velocity caused by the rotation of the non-inertial coordinate system relative to the inertial coordinate system as well as to more clearly highlight the direct correspondence between the terms in and the terms in .  Note simply depends on the air parcel's position given by and not on its movement relative to Earth. This means whether or not the air parcel is moving relative to Earth. Consequently, even if the air parcel is stationary on Earth's surface or in its atmosphere, it will rotate along with Earth and therefore move through space.  Now let's replace in with to produce a statement about the air parcel's acceleration.     We substitute into the right-hand side of and expand.     In most presentations of this derivation, the \"rot\" subscript usually is dropped after this point for brevity, and the left-hand side of usually is written and represents the acceleration of the air parcel relative to the inertial coordinate system. The first term on the right-hand side of , which now will be written , is the acceleration of the air parcel relative to the rotating coordinate system, i.e., relative to Earth. Then we have     "
},
{
  "id": "ch4-section-application-earth-4",
  "level": "2",
  "url": "ch4-section-application-earth.html#ch4-section-application-earth-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sidereal day solar day "
},
{
  "id": "ch4-section-inertial-accelerations",
  "level": "1",
  "url": "ch4-section-inertial-accelerations.html",
  "type": "Section",
  "number": "4.5",
  "title": "Inertial accelerations",
  "body": " Inertial accelerations  We now know that the vector equation of motion, of (reproduced in below with the inclusion of an appropriate subscript), depicts the acceleration of an air parcel relative to an inertial reference frame.      becomes the vector equation of motion in rotating coordinates , as given by below, when is substituted for the left-hand side.     Note that the two additional accelerations accompanying in that are caused by coordinate system rotation have been moved to the right-hand side of to isolate the air parcel acceleration relative to Earth . This is done to clarify that these two accelerations contribute to air parcel acceleration as measured in the rotating reference frame.  The term on the left-hand side of gives the acceleration of an air parcel relative to Earth. The terms on the right-hand side give the causes of that acceleration.  The first term on the right-hand side of , , is the Coriolis force per unit mass , where is the Coriolis force, or the Coriolis acceleration  .     The second term on the right-hand side of , , is the centrifugal force per unit mass , where is the centrifugal force, or the centrifugal acceleration  .     Keep in mind this centrifugal force is caused by Earth's rotation on its polar axis.  These two \"extra\" inertial forces the Coriolis force and the centrifugal force must be included with Newton's law of motion to describe motions in Earth's atmosphere as viewed from the rotating planet.  Accelerations corresponding to the fundamental forces of the gravitational, pressure gradient, and viscous friction forces appear identically on the right-hand side of both and . These forces are called \"fundamental\" because they are present in identical form in Newton's law of motion written for both inertial and non-inertial reference frames. In other words, whether the reference frame being used to describe air parcel motions is accelerating or not, these forces will be present!  "
},
{
  "id": "ch4-section-inertial-accelerations-4",
  "level": "2",
  "url": "ch4-section-inertial-accelerations.html#ch4-section-inertial-accelerations-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector equation of motion in rotating coordinates "
},
{
  "id": "ch4-section-inertial-accelerations-8",
  "level": "2",
  "url": "ch4-section-inertial-accelerations.html#ch4-section-inertial-accelerations-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Coriolis force per unit mass Coriolis acceleration "
},
{
  "id": "ch4-section-inertial-accelerations-10",
  "level": "2",
  "url": "ch4-section-inertial-accelerations.html#ch4-section-inertial-accelerations-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "centrifugal force per unit mass centrifugal acceleration "
},
{
  "id": "ch4-section-centrifugal-acceleration",
  "level": "1",
  "url": "ch4-section-centrifugal-acceleration.html",
  "type": "Section",
  "number": "4.6",
  "title": "Centrifugal acceleration",
  "body": " Centrifugal acceleration  There are two common position vectors used in meteorology:     which points from Earth's center to a point of interest and     which points perpendicular from Earth's axis of rotation to the point of interest. below shows and and the relationship between them.   Equatorial projection showing the position vectors and pointing to a location of interest on Earth's surface at latitude in and pointing to a location of interest in Earth's atmosphere at latitude in . The points have the same longitude that, while not shown, corresponds to the right-half of the curve of Earth's surface. The Equator is labeled EQ and the North Pole is labeled NP.      Two position vectors pointing to a location on Earth's surface.       Two position vectors pointing to a location in Earth's atmosphere.      Because the cross product of two vectors depends only on the perpendicular components of those vectors, and can be interchanged in the centrifugal acceleration formula:     Furthermore, replacing with in the centrifugal acceleration formula leads to the following simplification:     This simplified form makes it clear that the magnitude of the centrifugal acceleration acting on an air parcel is directly proportional to the radial distance of the air parcel from Earth's axis of rotation, which is why the centrifugal acceleration acts most strongly at the Equator, becomes weaker with proximity to poles, and is at the poles.  Additionally, the centrifugal acceleration can be written as a gradient of the rotational kinetic energy per unit mass of a body at radial distance from the axis of rotation, :     Thus, we have several equivalent ways to express the centrifugal acceleration, and we can choose to use the form that is most practical for a given context.     "
},
{
  "id": "ch4-radii",
  "level": "2",
  "url": "ch4-section-centrifugal-acceleration.html#ch4-radii",
  "type": "Figure",
  "number": "4.6.1",
  "title": "",
  "body": " Equatorial projection showing the position vectors and pointing to a location of interest on Earth's surface at latitude in and pointing to a location of interest in Earth's atmosphere at latitude in . The points have the same longitude that, while not shown, corresponds to the right-half of the curve of Earth's surface. The Equator is labeled EQ and the North Pole is labeled NP.      Two position vectors pointing to a location on Earth's surface.       Two position vectors pointing to a location in Earth's atmosphere.     "
},
{
  "id": "ch4-section-gravity",
  "level": "1",
  "url": "ch4-section-gravity.html",
  "type": "Section",
  "number": "4.7",
  "title": "Gravity",
  "body": " Gravity  Any object on Earth's surface or in its atmosphere constantly is subjected to both the gravitational and centrifugal forces, even if the object is not moving relative to Earth. Since the gravitational and centrifugal forces always are present, and neither depends on air parcel motion, their corresponding accelerations typically are summed to produce the gravity acceleration  , often called effective gravity , apparent gravity , or simply gravity .     where is the magnitude of the gravity acceleration.  Applying this definition to the vector equation of motion in rotating coordinates, , produces     While is simpler than , the summation of the gravitational and centrifugal accelerations is done for more than just mathematical convenience: It reveals why Earth is an oblate spheroid rather than a perfect sphere!  Objects at the poles feel the full strength of the inward-directed gravitational force since at the poles. In contrast, objects at other latitudes feel the centrifugal force partially oppose the gravitational force, and this effect is maximized at the Equator because the centrifugal force directly opposes the gravitational force and has largest magnitude at the Equator. These scenarios are shown in below.  Earth's surface is an oblate spheroid in response to the combined action of these forces. As shown in below, the oblate spheroid has smallest radius at the poles where the gravitational force attracts Earth's surface to the planet's center unopposed by the centrifugal force. It has largest radius at the Equator where the centrifugal force most strongly opposes the inward pull of the gravitational force.  According to Stull (2017) , Earth's polar radius is about 6356.755 km, and its equatorial radius is about 6378.140 km: a difference of just over 21 km. This difference is only about 0.33% of the two radii and can be ignored in most of our applications in favor of treating Earth as a sphere with mean radius of about km.   Equatorial project showing points at five locations: the North Pole , the Equator , and three intermediate Northern Hemisphere latitudes . The unlabeled dashed vector results from the sum of the gravitational and centrifugal forces, which are solid and labeled with the vector expressions for their corresponding accelerations, and , respectively. The lengths of the vectors are exaggerated so they can be seen in the small panels.       Circle representing Earth, with a horizontal line in its middle for the Equator, a vertical line in its middle for its polar axis, and the gravitational acceleration vector pointing from the North Pole to the Equator.       Circle representing Earth, with a horizontal line in its middle for the Equator, a vertical line in its middle for its polar axis, the gravitational acceleration vector pointing along the Equator toward Earth's center, the centrifugal acceleration vector pointing along the Equator away from Earth's center, and a dashed vector for the gravity acceleration pointing along the Equator toward Earth's center.         Circle representing Earth, with a horizontal line in its middle for the Equator, a vertical line in its middle for its polar axis, the gravitational acceleration vector pointing from Earth's surface to its center, the centrifugal acceleration vector pointing away from Earth's polar axis, and a dashed vector for the gravity acceleration pointing slightly to the right of Earth's center.       Circle representing Earth, with a horizontal line in its middle for the Equator, a vertical line in its middle for its polar axis, the gravitational acceleration vector pointing from Earth's surface to its center, the centrifugal acceleration vector pointing away from Earth's polar axis, and a dashed vector for the gravity acceleration pointing slightly to the right of Earth's center.         Circle representing Earth, with a horizontal line in its middle for the Equator, a vertical line in its middle for its polar axis, the gravitational acceleration vector pointing from Earth's surface to its center, the centrifugal acceleration vector pointing away from Earth's polar axis, and a dashed vector for the gravity acceleration pointing slightly to the right of Earth's center.        Equatorial projection of Earth's oblate spheroid shape (solid black oval) and approximate spherical shape (dashed gray circle). Vectors representing the gravitational force, centrifugal force, and gravity are shown at an intermediate latitude in the Northern Hemisphere and are labeled with the vector expressions for their corresponding accelerations, , , and , respectively. The oblateness of the planet is exaggerated for visual clarity.   A solid oval representing an oblate spheroidal Earth, a dashed circle representing a spherical Earth, with a horizontal dashed line in its middle for the Equator and a vertical dashed line in its middle for its polar axis, the gravitational acceleration vector pointing from Earth's surface to its center, the centrifugal acceleration vector pointing away from Earth's polar axis, and a dashed vector for the gravity acceleration pointing slightly to the right of Earth's center.    "
},
{
  "id": "ch4-section-gravity-2",
  "level": "2",
  "url": "ch4-section-gravity.html#ch4-section-gravity-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "gravity acceleration effective gravity apparent gravity gravity "
},
{
  "id": "ch4-gravity-panels",
  "level": "2",
  "url": "ch4-section-gravity.html#ch4-gravity-panels",
  "type": "Figure",
  "number": "4.7.1",
  "title": "",
  "body": " Equatorial project showing points at five locations: the North Pole , the Equator , and three intermediate Northern Hemisphere latitudes . The unlabeled dashed vector results from the sum of the gravitational and centrifugal forces, which are solid and labeled with the vector expressions for their corresponding accelerations, and , respectively. The lengths of the vectors are exaggerated so they can be seen in the small panels.       Circle representing Earth, with a horizontal line in its middle for the Equator, a vertical line in its middle for its polar axis, and the gravitational acceleration vector pointing from the North Pole to the Equator.       Circle representing Earth, with a horizontal line in its middle for the Equator, a vertical line in its middle for its polar axis, the gravitational acceleration vector pointing along the Equator toward Earth's center, the centrifugal acceleration vector pointing along the Equator away from Earth's center, and a dashed vector for the gravity acceleration pointing along the Equator toward Earth's center.         Circle representing Earth, with a horizontal line in its middle for the Equator, a vertical line in its middle for its polar axis, the gravitational acceleration vector pointing from Earth's surface to its center, the centrifugal acceleration vector pointing away from Earth's polar axis, and a dashed vector for the gravity acceleration pointing slightly to the right of Earth's center.       Circle representing Earth, with a horizontal line in its middle for the Equator, a vertical line in its middle for its polar axis, the gravitational acceleration vector pointing from Earth's surface to its center, the centrifugal acceleration vector pointing away from Earth's polar axis, and a dashed vector for the gravity acceleration pointing slightly to the right of Earth's center.         Circle representing Earth, with a horizontal line in its middle for the Equator, a vertical line in its middle for its polar axis, the gravitational acceleration vector pointing from Earth's surface to its center, the centrifugal acceleration vector pointing away from Earth's polar axis, and a dashed vector for the gravity acceleration pointing slightly to the right of Earth's center.      "
},
{
  "id": "ch4-gravity",
  "level": "2",
  "url": "ch4-section-gravity.html#ch4-gravity",
  "type": "Figure",
  "number": "4.7.2",
  "title": "",
  "body": " Equatorial projection of Earth's oblate spheroid shape (solid black oval) and approximate spherical shape (dashed gray circle). Vectors representing the gravitational force, centrifugal force, and gravity are shown at an intermediate latitude in the Northern Hemisphere and are labeled with the vector expressions for their corresponding accelerations, , , and , respectively. The oblateness of the planet is exaggerated for visual clarity.   A solid oval representing an oblate spheroidal Earth, a dashed circle representing a spherical Earth, with a horizontal dashed line in its middle for the Equator and a vertical dashed line in its middle for its polar axis, the gravitational acceleration vector pointing from Earth's surface to its center, the centrifugal acceleration vector pointing away from Earth's polar axis, and a dashed vector for the gravity acceleration pointing slightly to the right of Earth's center.   "
},
{
  "id": "ch4-section-geopotential",
  "level": "1",
  "url": "ch4-section-geopotential.html",
  "type": "Section",
  "number": "4.8",
  "title": "Geopotential and geopotential height",
  "body": " Geopotential and geopotential height   Geopotential  [ ] is defined as the mechanical work that must be done against gravity to lift a 1 kg mass (such as an air parcel) from Earth's mean sea level to geometric height . Alternatively, can be interpreted as the gravity potential energy per unit mass an object possesses at geometric height . It follows that every geometric height is associated with a unique value of .  Recall from your calculus and\/or physics courses that the mechanical work  [J] done against a one-dimensional force to move an object from to is given by     Since Newton's law of motion tells us we can write the magnitude of a force as , can be written     Assuming constant mass (as we usually do), can be written     and so the work per unit mass (i.e., the specific work ) [ ] is given by     Note that is a dummy variable since it does not appear in the final integrated result. We could replace with another variable, such as or or , and the result would be the same.  We can apply to the verbal definition of discussed above to produce its integral definition.     where the dummy variable has been used to emphasize the presence of geometric height only in the upper bound.  Since \"disappears\" in the integration, reveals . It follows that     and     by the  part of the fundamental theorem of calculus . Since ,     and therefore we can write as     Since surfaces of constant geopotential (called geopotential surfaces or equipotential surfaces ) are parallel to Earth's oblate spheroid surface, it can be useful to define geopotential height  [m] as an alternative measure of the vertical distance above Earth's mean sea level rather than geometric height.     where is the magnitude of the gravity acceleration at Earth's mean sea level. You will see this value frequently, as it is a reasonable approximation to true gravity for heights in the troposphere, which are relevant to the large majority of our weather.  Since , it follows from that , and so every geometric height is associated with a unique value of geopotential height . While both and are measured in meters, the former may be referred to as \" geometric meters \" and the latter may be referred to as \" geopotential meters \" to clarify which measure of height is being used.  "
},
{
  "id": "ch4-section-geopotential-2",
  "level": "2",
  "url": "ch4-section-geopotential.html#ch4-section-geopotential-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Geopotential "
},
{
  "id": "ch4-section-geopotential-3",
  "level": "2",
  "url": "ch4-section-geopotential.html#ch4-section-geopotential-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "work "
},
{
  "id": "ch4-section-geopotential-9",
  "level": "2",
  "url": "ch4-section-geopotential.html#ch4-section-geopotential-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "work per unit mass specific work "
},
{
  "id": "ch4-section-geopotential-23",
  "level": "2",
  "url": "ch4-section-geopotential.html#ch4-section-geopotential-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "geopotential surfaces equipotential surfaces geopotential height "
},
{
  "id": "ch4-section-geopotential-26",
  "level": "2",
  "url": "ch4-section-geopotential.html#ch4-section-geopotential-26",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "geometric meters geopotential meters "
},
{
  "id": "ch4-section-inertial-forces-authors-note",
  "level": "1",
  "url": "ch4-section-inertial-forces-authors-note.html",
  "type": "Section",
  "number": "4.9",
  "title": "Author’s note on inertial forces",
  "body": " Author's note on inertial forces  Inertial forces like the centrifugal and Coriolis forces often are described as \"fictitious\" or \"apparent\" in contrast to \"real\" fundamental forces like the pressure gradient, gravitational, and viscous friction forces. This is because \"real\" forces are present in identical mathematical form in both inertial and non-inertial reference frames, while \"fictitious\" forces are present only in non-inertial reference frames.  Inertial forces also often are described as mathematical \"corrections\" that enable us to apply Newton's laws of motion to non-inertial reference frames like Earth, as if our planet's rotation was simply a mathematical inconvenience that we must rectify.  But inertial forces are very real to us who live in a non-inertial reference frame! Consider riding in a Gravitron : The centrifugal force is part of what keeps you safe by preventing you from sliding down the wall. This is the same force that makes you lean into the car door as you ride in a car that is banking around a turn. Likewise, you experience an inertial force that presses you against your seat as you ride in a car that is speeding up as it moves forward.  Inertial forces also significantly influence atmospheric motions and the motions of objects that travel long distances through Earth's atmosphere or stay within it for a long time, like airplanes and missiles. The centrifugal and Coriolis forces are part of our reality, and they must be taken into account by pilots and ballistics experts as well as by meteorologists.  "
},
{
  "id": "ch4-section-selected-references",
  "level": "1",
  "url": "ch4-section-selected-references.html",
  "type": "Section",
  "number": "4.10",
  "title": "Selected references",
  "body": " Selected references     Chapters 2 and 3 of Martin (2006) : See tentative course schedule for specific readings.    Chapters 1 and 2 of Holton and Hakim (2013) : See tentative course schedule for specific readings.    Chapter 6 of Marshall and Plumb (2007)      "
},
{
  "id": "ch5-section-expanding-acceleration",
  "level": "1",
  "url": "ch5-section-expanding-acceleration.html",
  "type": "Section",
  "number": "5.1",
  "title": "Expanding the acceleration",
  "body": " Expanding the acceleration   Expanding the total derivative of  Using the definition of the total derivative,     The first term on the right-hand side of is     since, at a fixed location on Earth or in its atmosphere, the local orientation of a unit direction vector does not change with time. Specifically, always points to the local east.  Furthermore, reveals that     Therefore, reduces to     To evaluate , we make a horizontal slice perpendicular to Earth's axis of rotation at latitude to create a disk of radius . As shown in below, we then consider the change in 's orientation when its anchoring point is placed at two nearby points on Earth's surface with latitude and longitudes separated by angle along arc .   North polar projection showing unit direction vectors and placed on Earth's surface at two nearby points at the edge of the disk of radius and separated by angle and arc .   Two unit direction vectors at two nearby points on the edge of a circular disk viewed from above. The vectors point tangent to the edge of the disk.    Fixing the tails of and together in below reveals that is the angle swept out between them and is the vector difference between them.   Reproduction of and from . When the tails of the vectors are fixed together, they are separated by angle and their vector difference is .   Two unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.    Reproducing with the tail of moved to the tail of and additionally included in below makes these relationships even clearer.   Reproduction of with the tail of fixed to the tail of . As shown in , and are separated by angle and their vector difference is .   Two unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.    We can use the arc length formula to express in terms of :     Note that we presented this formula in .  Likewise, we can use the arc length formula to approximate , and we can take advantage of the fact that, since is a unit direction vector, .     Therefore,     From , we can see that as , and points directly inward toward the center of the disk, perpendicular to Earth's axis of rotation. In particular, below shows that points in the direction of . Therefore,     and becomes      Equatorial projection showing the unit direction vectors , , and of the local Cartesian coordinate system fixed to Earth's surface at radius perpendicular to Earth's axis of rotation, where is Earth's mean radius and is latitude. The vector difference points inward and perpendicular to Earth's axis of rotation.   A point on Earth's surface with the local Cartesian coordinate system as well as a vector difference pointing inward perpendicular to Earth's axis of rotation placed at that point.      Expanding the total derivative of  Again using the definition of the total derivative:     Again, the first term on the right-hand side of is     since, at a fixed location on Earth or in its atmosphere, the local orientation of a unit direction vector does not change with time. Specifically, always points to the local north.  Furthermore, reveals that     Therefore, reduces to     To evaluate , we again make a horizontal slice perpendicular to Earth's axis of rotation at latitude to create a disk of radius . As shown in below, we then consider the difference in 's orientation when its anchoring point is placed at two nearby points on Earth's surface with latitude and longitudes separated by angle along arc .   North polar projection showing portions of unit direction vectors and placed on Earth's surface at two nearby points at the edge of the disk of radius and separated by angle and arc .   Two portions of unit direction vectors at two nearby points on the edge of a circular disk viewed from above. The vectors point inward toward the center of the disk.    Before going further, note rather than is shown in because is the projection of onto the disk, as shown in below. The remaining portion of , , does not change with , as it always points vertically upward from the disk.   Equatorial projection showing the unit direction vectors , , and of the local Cartesian coordinate system fixed to Earth's surface at radius perpendicular to Earth's axis of rotation, where is Earth's mean radius and is latitude. The portion of that points inward perpendicular to Earth's axis of rotation is given by .   A point on Earth's surface with the local Cartesian coordinate system as well as a vector projection pointing inward perpendicular to Earth's axis of rotation placed at that point.    Fixing the tails of and together in below reveals that is the angle swept out between them and is the vector difference between them.   Reproduction of and from . When the tails of the vectors are fixed together, they are separated by angle and their vector difference is .   Two portions of unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.    Reproducing with the tail of moved to the tail of and additionally included in below makes these relationships even clearer.   Reproduction of with the tail of fixed to the tail of . As shown in , and are separated by angle and their vector difference is .   Two portions of unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.    We again can use the arc length formula to approximate , and we can take advantage of the fact that, since is a unit direction vector, .     And as noted in , . Therefore,     From , we can see that as , and points in the direction. So     To evaluate , we make a vertical slice through Earth's axis of rotation at longitude . As shown in below, we then consider the difference in 's orientation when its anchoring point is placed at two nearby points on Earth's surface with longitude and latitudes separated by angle along arc .   Equatorial projection showing unit direction vectors and placed on Earth's surface at two nearby points with longitude and separated by angle and arc .   Two unit direction vectors at two nearby points on the edge of a circular disk viewed from the side. The vectors point tangent to the edge of the disk.    Fixing the tails of and together in below reveals that is the angle swept out between them and is the vector difference between them.   Reproduction of and from . When the tails of the vectors are fixed together, they are separated by angle and their vector difference is .   Two unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.    Reproducing with the tail of moved to the tail of and additionally included in below makes these relationships even clearer.   Reproduction of with the tail of moved to the tail of . As shown in , and are separated by angle and their vector difference is .   Two unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.    We again can use the arc length formula to express in terms of :     Note that we presented this formula in .  Likewise, we again can use the arc length formula to approximate , and we can take advantage of the fact that, since is a unit direction vector, .     Therefore,     From , we can see that as , and points in the direction. So     and becomes       Expanding the total derivative of  Again using the definition of the total derivative:     Again, the first term on the right-hand side of is     since, at a fixed location on Earth or in its atmosphere, the local orientation of a unit direction vector does not change with time. Specifically, always points locally upward.  Furthermore, reveals that     Therefore, reduces to     To evaluate , we again make a horizontal slice perpendicular to Earth's axis of rotation at latitude to create a disk of radius . As shown in below, we then consider the difference in 's orientation when its anchoring point is placed at two nearby points on Earth's surface with latitude and longitudes separated by angle along arc .   North polar projection showing portions of unit direction vectors and placed on Earth's surface at two nearby points at the edge of the disk of radius and separated by angle and arc .   Two portions of unit direction vectors at two nearby points on the edge of a circular disk viewed from above. The vectors point outward away from the center of the disk.    Before going further, note rather than is shown in because is the projection of onto the disk, as shown in below. The remaining portion of , , does not change with , as it always points vertically upward from the disk.   Equatorial projection showing the unit direction vectors , , and of the local Cartesian coordinate system fixed to Earth's surface at radius perpendicular to Earth's axis of rotation, where is Earth's mean radius and is latitude. The portion of that points outward perpendicular to Earth's axis of rotation is given by .   A point on Earth's surface with the local Cartesian coordinate system as well as a vector projection pointing outward perpendicular to Earth's axis of rotation placed at that point.    Fixing the tails of and together in below reveals that is the angle swept out between them and is the vector difference between them.   Reproduction of and from . When the tails of the vectors are fixed together, they are separated by angle and their vector difference is .   Two portions of unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.    Reproducing with the tail of moved to the tail of and additionally included in below makes these relationships even clearer.   Reproduction of with the tail of fixed to the tail of . As shown in , and are separated by angle and their vector difference is .   Two portions of unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.    We again can use the arc length formula to approximate , and we can take advantage of the fact that, since is a unit direction vector, .     And as noted in , . Therefore,     From , we can see that as , and points in the direction. So     To evaluate , we again make a vertical slice through Earth's axis of rotation at longitude . As shown in below, we then consider the difference in 's orientation when its anchoring point is placed at two nearby points on Earth's surface with longitude and latitudes separated by angle along arc .   Equatorial projection showing unit direction vectors and placed on Earth's surface at two nearby points with longitude and separated by angle and arc .   Two unit direction vectors at two nearby points on the edge of a circular disk viewed from the side. The vectors point outward away from the edge of the disk.    Fixing the tails of and together in below reveals that is the angle swept out between them and is the vector difference between them.   Reproduction of and from . When the tails of the vectors are fixed together, they are separated by angle and their vector difference is .   Two unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.    Reproducing with the tail of moved to the tail of and additionally included in below makes these relationships even clearer.   Reproduction of with the tail of moved to the tail of . As shown in , and are separated by angle and their vector difference is .   Two unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.    We again can use the arc length formula to approximate , and we can take advantage of the fact that, since is a unit direction vector, .     And as noted in , . Therefore,     From , we can see that as , and points in the direction. So     and becomes       Putting everything together  The acceleration of an air parcel in expands into     when applied to the spherical Earth. The \"extra\" terms inversely proportional to are called curvature terms , and the above derivations show that they result from Earth's sphericity. Specifically, they are caused by Earth's surface curving away underneath the straight-line trajectory of .    Author's note on the simplifying use of  The derivations of the curvature terms shown above assumed the unit direction vectors were placed on Earth's surface, and consequently these terms are inversely proportional to Earth's mean radius . However, as shows, the derivations also apply to locations within Earth's atmosphere at geometric height above Earth's mean sea level. In this case, would be replaced by in the ensuing derivations and the resulting curvature terms in . It is perfectly fine to make this replacement, but be aware that most texts including Bluestein (1992) , Martin (2006) , and Holton and Hakim (2013) use rather than for simplicity. This simplification is acceptable since the planet is much thicker than its atmosphere, and it especially is acceptable since the majority of atmospheric motions of interest occur close to Earth's surface.   "
},
{
  "id": "ch5-spherical-i-start",
  "level": "2",
  "url": "ch5-section-expanding-acceleration.html#ch5-spherical-i-start",
  "type": "Figure",
  "number": "5.1.1",
  "title": "",
  "body": " North polar projection showing unit direction vectors and placed on Earth's surface at two nearby points at the edge of the disk of radius and separated by angle and arc .   Two unit direction vectors at two nearby points on the edge of a circular disk viewed from above. The vectors point tangent to the edge of the disk.   "
},
{
  "id": "ch5-spherical-i-zoom",
  "level": "2",
  "url": "ch5-section-expanding-acceleration.html#ch5-spherical-i-zoom",
  "type": "Figure",
  "number": "5.1.2",
  "title": "",
  "body": " Reproduction of and from . When the tails of the vectors are fixed together, they are separated by angle and their vector difference is .   Two unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.   "
},
{
  "id": "ch5-spherical-i-middle",
  "level": "2",
  "url": "ch5-section-expanding-acceleration.html#ch5-spherical-i-middle",
  "type": "Figure",
  "number": "5.1.3",
  "title": "",
  "body": " Reproduction of with the tail of fixed to the tail of . As shown in , and are separated by angle and their vector difference is .   Two unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.   "
},
{
  "id": "ch5-spherical-i-end",
  "level": "2",
  "url": "ch5-section-expanding-acceleration.html#ch5-spherical-i-end",
  "type": "Figure",
  "number": "5.1.4",
  "title": "",
  "body": " Equatorial projection showing the unit direction vectors , , and of the local Cartesian coordinate system fixed to Earth's surface at radius perpendicular to Earth's axis of rotation, where is Earth's mean radius and is latitude. The vector difference points inward and perpendicular to Earth's axis of rotation.   A point on Earth's surface with the local Cartesian coordinate system as well as a vector difference pointing inward perpendicular to Earth's axis of rotation placed at that point.   "
},
{
  "id": "ch5-spherical-j-x-start",
  "level": "2",
  "url": "ch5-section-expanding-acceleration.html#ch5-spherical-j-x-start",
  "type": "Figure",
  "number": "5.1.5",
  "title": "",
  "body": " North polar projection showing portions of unit direction vectors and placed on Earth's surface at two nearby points at the edge of the disk of radius and separated by angle and arc .   Two portions of unit direction vectors at two nearby points on the edge of a circular disk viewed from above. The vectors point inward toward the center of the disk.   "
},
{
  "id": "ch5-spherical-j-x-breakdown",
  "level": "2",
  "url": "ch5-section-expanding-acceleration.html#ch5-spherical-j-x-breakdown",
  "type": "Figure",
  "number": "5.1.6",
  "title": "",
  "body": " Equatorial projection showing the unit direction vectors , , and of the local Cartesian coordinate system fixed to Earth's surface at radius perpendicular to Earth's axis of rotation, where is Earth's mean radius and is latitude. The portion of that points inward perpendicular to Earth's axis of rotation is given by .   A point on Earth's surface with the local Cartesian coordinate system as well as a vector projection pointing inward perpendicular to Earth's axis of rotation placed at that point.   "
},
{
  "id": "ch5-spherical-j-x-zoom",
  "level": "2",
  "url": "ch5-section-expanding-acceleration.html#ch5-spherical-j-x-zoom",
  "type": "Figure",
  "number": "5.1.7",
  "title": "",
  "body": " Reproduction of and from . When the tails of the vectors are fixed together, they are separated by angle and their vector difference is .   Two portions of unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.   "
},
{
  "id": "ch5-spherical-j-x-end",
  "level": "2",
  "url": "ch5-section-expanding-acceleration.html#ch5-spherical-j-x-end",
  "type": "Figure",
  "number": "5.1.8",
  "title": "",
  "body": " Reproduction of with the tail of fixed to the tail of . As shown in , and are separated by angle and their vector difference is .   Two portions of unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.   "
},
{
  "id": "ch5-spherical-j-y-start",
  "level": "2",
  "url": "ch5-section-expanding-acceleration.html#ch5-spherical-j-y-start",
  "type": "Figure",
  "number": "5.1.9",
  "title": "",
  "body": " Equatorial projection showing unit direction vectors and placed on Earth's surface at two nearby points with longitude and separated by angle and arc .   Two unit direction vectors at two nearby points on the edge of a circular disk viewed from the side. The vectors point tangent to the edge of the disk.   "
},
{
  "id": "ch5-spherical-j-y-zoom",
  "level": "2",
  "url": "ch5-section-expanding-acceleration.html#ch5-spherical-j-y-zoom",
  "type": "Figure",
  "number": "5.1.10",
  "title": "",
  "body": " Reproduction of and from . When the tails of the vectors are fixed together, they are separated by angle and their vector difference is .   Two unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.   "
},
{
  "id": "ch5-spherical-j-y-end",
  "level": "2",
  "url": "ch5-section-expanding-acceleration.html#ch5-spherical-j-y-end",
  "type": "Figure",
  "number": "5.1.11",
  "title": "",
  "body": " Reproduction of with the tail of moved to the tail of . As shown in , and are separated by angle and their vector difference is .   Two unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.   "
},
{
  "id": "ch5-spherical-k-x-start",
  "level": "2",
  "url": "ch5-section-expanding-acceleration.html#ch5-spherical-k-x-start",
  "type": "Figure",
  "number": "5.1.12",
  "title": "",
  "body": " North polar projection showing portions of unit direction vectors and placed on Earth's surface at two nearby points at the edge of the disk of radius and separated by angle and arc .   Two portions of unit direction vectors at two nearby points on the edge of a circular disk viewed from above. The vectors point outward away from the center of the disk.   "
},
{
  "id": "ch5-spherical-k-x-breakdown",
  "level": "2",
  "url": "ch5-section-expanding-acceleration.html#ch5-spherical-k-x-breakdown",
  "type": "Figure",
  "number": "5.1.13",
  "title": "",
  "body": " Equatorial projection showing the unit direction vectors , , and of the local Cartesian coordinate system fixed to Earth's surface at radius perpendicular to Earth's axis of rotation, where is Earth's mean radius and is latitude. The portion of that points outward perpendicular to Earth's axis of rotation is given by .   A point on Earth's surface with the local Cartesian coordinate system as well as a vector projection pointing outward perpendicular to Earth's axis of rotation placed at that point.   "
},
{
  "id": "ch5-spherical-k-x-zoom",
  "level": "2",
  "url": "ch5-section-expanding-acceleration.html#ch5-spherical-k-x-zoom",
  "type": "Figure",
  "number": "5.1.14",
  "title": "",
  "body": " Reproduction of and from . When the tails of the vectors are fixed together, they are separated by angle and their vector difference is .   Two portions of unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.   "
},
{
  "id": "ch5-spherical-k-x-end",
  "level": "2",
  "url": "ch5-section-expanding-acceleration.html#ch5-spherical-k-x-end",
  "type": "Figure",
  "number": "5.1.15",
  "title": "",
  "body": " Reproduction of with the tail of fixed to the tail of . As shown in , and are separated by angle and their vector difference is .   Two portions of unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.   "
},
{
  "id": "ch5-spherical-k-y-start",
  "level": "2",
  "url": "ch5-section-expanding-acceleration.html#ch5-spherical-k-y-start",
  "type": "Figure",
  "number": "5.1.16",
  "title": "",
  "body": " Equatorial projection showing unit direction vectors and placed on Earth's surface at two nearby points with longitude and separated by angle and arc .   Two unit direction vectors at two nearby points on the edge of a circular disk viewed from the side. The vectors point outward away from the edge of the disk.   "
},
{
  "id": "ch5-spherical-k-y-zoom",
  "level": "2",
  "url": "ch5-section-expanding-acceleration.html#ch5-spherical-k-y-zoom",
  "type": "Figure",
  "number": "5.1.17",
  "title": "",
  "body": " Reproduction of and from . When the tails of the vectors are fixed together, they are separated by angle and their vector difference is .   Two unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.   "
},
{
  "id": "ch5-spherical-k-y-end",
  "level": "2",
  "url": "ch5-section-expanding-acceleration.html#ch5-spherical-k-y-end",
  "type": "Figure",
  "number": "5.1.18",
  "title": "",
  "body": " Reproduction of with the tail of moved to the tail of . As shown in , and are separated by angle and their vector difference is .   Two unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.   "
},
{
  "id": "ch5-section-expanding-acceleration-subsection-all-4",
  "level": "2",
  "url": "ch5-section-expanding-acceleration.html#ch5-section-expanding-acceleration-subsection-all-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "curvature terms "
},
{
  "id": "ch5-section-expanding-coriolis",
  "level": "1",
  "url": "ch5-section-expanding-coriolis.html",
  "type": "Section",
  "number": "5.2",
  "title": "Expanding the Coriolis acceleration",
  "body": " Expanding the Coriolis acceleration  As discussed in and shown its and , Earth's angular velocity is directed parallel to Earth's axis of rotation, pointing upward toward the North Pole. Every point on Earth and within Earth's atmosphere is imbued with this same angular velocity. At the North Pole, points in the direction, while at the South pole, points in the direction. At the Equator, points in the direction. At any other location on Earth's surface or within its atmosphere, points partially in the direction and partially in the direction, as shown in below.   Equatorial projection showing the unit direction vectors of the local Cartesian coordinate system fixed to a point of interest on Earth's surface at radius , perpendicular to Earth's axis of rotation, where is Earth's mean radius and is latitude. Vector shows Earth's constant angular velocity. A copy of is moved to the point of interest on Earth's surface.   A point on Earth's surface with the local Cartesian coordinate system and Earth's angular velocity vector placed at that point.    As we learned in , expands in spherical coordinates as     Consequently, the Coriolis acceleration expands as follows in spherical coordinates:     As we will see in Chapter 8, the terms in with tend to be much larger than the terms with . Taking advantage of the dominance of the terms, we define the Coriolis parameter      Then can be written     "
},
{
  "id": "ch5-spherical-coriolis",
  "level": "2",
  "url": "ch5-section-expanding-coriolis.html#ch5-spherical-coriolis",
  "type": "Figure",
  "number": "5.2.1",
  "title": "",
  "body": " Equatorial projection showing the unit direction vectors of the local Cartesian coordinate system fixed to a point of interest on Earth's surface at radius , perpendicular to Earth's axis of rotation, where is Earth's mean radius and is latitude. Vector shows Earth's constant angular velocity. A copy of is moved to the point of interest on Earth's surface.   A point on Earth's surface with the local Cartesian coordinate system and Earth's angular velocity vector placed at that point.   "
},
{
  "id": "ch5-section-expanding-coriolis-8",
  "level": "2",
  "url": "ch5-section-expanding-coriolis.html#ch5-section-expanding-coriolis-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Coriolis parameter "
},
{
  "id": "ch5-section-expanding-friction",
  "level": "1",
  "url": "ch5-section-expanding-friction.html",
  "type": "Section",
  "number": "5.3",
  "title": "Expanding the viscous friction acceleration",
  "body": " Expanding the viscous friction acceleration  Any acceleration that depends on air parcel velocity should be expanded to account for Earth's sphericity. While the gravity acceleration and pressure gradient acceleration do not depend on , the viscous friction acceleration does. Given how involved the above derivations needed to expand were, you might imagine expanding second-order partial derivatives for would be even more tedious and you would be right!  Typically, the expansion of the viscous friction acceleration is neglected since (1) the viscous friction acceleration is very small except within the lowest few millimeters of Earth's atmosphere and (2) the curvature terms that result from its expansion are even smaller than those produced by the expansion of the air parcel acceleration term and therefore are safely neglected in most contexts. We will neglect expanding this acceleration to save time, which is consistent with the large majority of texts.  "
},
{
  "id": "ch5-section-equations-of-motion",
  "level": "1",
  "url": "ch5-section-equations-of-motion.html",
  "type": "Section",
  "number": "5.4",
  "title": "Component equations of motion",
  "body": " Component equations of motion  Substituting and into produces the following three scalar component equations of motion, collectively called the equations of motion or momentum equations .            and collectively are referred to as the horizontal equations of motion or the horizontal momentum equations , and is referred to as the vertical equation of motion or the vertical momentum equation .  All atmospheric motions on any scale are governed by . And since these equations give the time rate of change of an air parcel's velocity, they are prognostic and therefore allow us to predict atmospheric motions at future times!  But these equations are complicated, and as you go along in your meteorology career, you will see how it is convenient to modify them in ways that help us better apply them to understanding different types of motions, such as by making simplifying assumptions, combining them in different ways to produce more directly useful related quantities, and rewriting them using different coordinate systems that better fit certain atmospheric motions. We will get a taste of such modifications in future chapters, and you certainly will get practice with these in future courses!  "
},
{
  "id": "ch5-section-equations-of-motion-2",
  "level": "2",
  "url": "ch5-section-equations-of-motion.html#ch5-section-equations-of-motion-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equations of motion momentum equations "
},
{
  "id": "ch5-section-equations-of-motion-6",
  "level": "2",
  "url": "ch5-section-equations-of-motion.html#ch5-section-equations-of-motion-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "horizontal equations of motion horizontal momentum equations vertical equation of motion vertical momentum equation "
},
{
  "id": "ch5-section-equations-of-motion-7",
  "level": "2",
  "url": "ch5-section-equations-of-motion.html#ch5-section-equations-of-motion-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "prognostic "
},
{
  "id": "ch5-section-selected-references",
  "level": "1",
  "url": "ch5-section-selected-references.html",
  "type": "Section",
  "number": "5.5",
  "title": "Selected references",
  "body": " Selected references     Chapter 3 of Martin (2006) : See tentative course schedule for specific readings.    Chapter 2 of Holton and Hakim (2013) : See tentative course schedule for specific readings.    Chapter 4 of Bluestein (1992)      "
},
{
  "id": "references",
  "level": "1",
  "url": "references.html",
  "type": "References",
  "number": "6",
  "title": "References",
  "body": " References   Bluestein, H. B.  Synoptic-Dynamic Meteorology in Midlatitudes: Principles of Kinematics and Dynamics  1  Oxford University Press  1992    Holton, J. R.  Hakim, G. J.  An Introduction to Dynamic Meteorology  Academic Press  2013   3rd edition     Kundu, P. K.  Cohen, I. M.  Dowling, D. R.  Fluid Mechanics  Academic Press  2016   6th edition     Marshall, J.  Plumb, R. A.  Atmosphere, Ocean and Climate Dynamics: An Introductory Text  Academic Press  2007    Martin, J. E.  Mid-latitude Atmospheric Dynamics: A First Course  Wiley  2006    Stull, R. B.  Practical Meteorology: An Algebra-based Survey of Atmospheric Science  University of British Columbia  2017   Version 1.02b     National Oceanic and Atmospheric Administration  National Aeronautics and Space Administration  United States Air Force  U.S. Standard Atmosphere, 1976  U.S. Government Printing Office  1976   "
},
{
  "id": "holton-hakim-6",
  "level": "2",
  "url": "references.html#holton-hakim-6",
  "type": "Note",
  "number": "6.2.1",
  "title": "",
  "body": " 3rd edition  "
},
{
  "id": "kundu-cohen-dowling-7",
  "level": "2",
  "url": "references.html#kundu-cohen-dowling-7",
  "type": "Note",
  "number": "6.3.1",
  "title": "",
  "body": " 6th edition  "
},
{
  "id": "stull-5",
  "level": "2",
  "url": "references.html#stull-5",
  "type": "Note",
  "number": "6.6.1",
  "title": "",
  "body": " Version 1.02b  "
},
{
  "id": "aa-section-turntable",
  "level": "1",
  "url": "aa-section-turntable.html",
  "type": "Section",
  "number": "A.1",
  "title": "Derivation for a turntable",
  "body": " Derivation for a turntable   Visualize a turntable of radius that is rotating with constant angular velocity . As shown in below, points perpendicular to the turntable and is directed out of the screen.  We can apply the local Cartesian coordinate system to any given point on the turntable, and for visual simplicity, we will do below so for a point on the edge of the turntable. All the unit direction vectors discussed below have an implied subscript \"rot\" since they are attached to the turntable, which is a rotating reference frame.   View from above of a turntable of radius rotating at constant angular velocity . The unit direction vectors of the local Cartesian coordinate system fixed to the turntable are shown at a point on the edge of the turntable. Vector shows the turntable's constant angular velocity.   Circular disk rotating counter-clockwise about its center viewed from above, with radius and unit direction vectors for a point on its edge.    Consider a point fixed to the edge of the turntable: points to the local right, points directly inward toward the center of the turntable, and points in the same direction as . Therefore, we can write , where [ ] is the angular displacement and [ ] is the angular speed. By these definitions, during a period of time , the turntable rotates through angular displacement .  Note that any point on the turntable can be produced simply by decreasing the value of ; more generally, any point on the same plane as the turntable can be produced simply by changing the value of . Thus, the following derivations apply to any point in the plane of the turntable.  Furthermore, note that any point above or below the turntable can be produced simply by \"lifting\" the unit direction vectors upward in the direction of or \"pushing\" the unit direction vectors downward in the direction of , respectively, as this does not change their orientations. Thus, the following derivations apply to any point above or below the plane of the turntable.    Expanding the total derivative of  The orientations of the unit direction vectors of the local Cartesian coordinate system can change depending on where their anchoring point is placed on the turntable or above or below it. Furthermore, they and their point rotate along with the turntable. Consequently, , , and , and , , and .  We will start by using the chain rule to expand . This will give us insight into how changes orientation as the turntable rotates.     The second term on the right-hand side of is since does not change orientation if placed at a different radius while holding and constant, and therefore . Furthermore, the point does not move from the edge of the turntable, and so . Likewise, the third term on the right-hand side of is since does not change orientation if placed at a different height above or below the turntable while holding and constant, and therefore . Furthermore, the point does not move above or below the edge of the turntable, and so . Therefore, reduces to     To evaluate , we consider the change in 's orientation when its anchoring point is fixed to the edge of the turntable and sweeps through angular displacement over time , as shown in below. is the initial position of , and is the final position of after time has passed and it has swept through angular displacement .   Unit direction vectors and at two nearby points at radius to the turntable of and separated by angular displacement .   Two unit direction vectors at two nearby points on the edge of a circular disk rotating counter-clockwise about its center viewed from above. The vectors point tangent to the edge of the disk.    Fixing the tails of and together in below reveals that is the angle swept out between them and is the vector difference between them.   Reproduction of and from . When the tails of the vectors are fixed together, they are separated by angle and their vector difference is .   Two unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.    Reproducing with the tail of moved to the tail of and additionally included in below makes these relationships even clearer.   Reproduction of with the tail of fixed to the tail of . As shown in , and are separated by angle and their vector difference is .   Two unit direction vectors with their tails fixed together on the edge of a circular disk rotating counter-clockwise about its center viewed from above.    We can use the arc length formula to approximate , and we can take advantage of the fact that, since is a unit direction vector, .     Therefore,     From , we can see that as , and points directly inward toward the center of the turntable, which coincides with the direction. So       Expanding the total derivative of  We can use the chain rule to expand :     The second term on the right-hand side of is since does not change orientation if placed at a different radius while holding and constant, and therefore . Furthermore, as noted in , the point does not move from the edge of the turntable, and so . Likewise, the third term on the right-hand size of is since does not change orientation if placed at a different height above or below the turntable while holding and constant, and therefore . Furthermore, as noted in , the point does not move above or below the edge of the turntable, and so . Therefore, reduces to     To evaluate , we consider the change in 's orientation when its anchoring point is fixed to the edge of the turntable and sweeps through angular displacement over time , as shown in below. is the initial position of , and is the final position of after time has passed and it has swept through angular displacement .   Unit direction vectors and at two nearby points at radius to the turntable of and separated by angular displacement .   Two unit direction vectors at two nearby points on the edge of a circular disk rotating counter-clockwise about its center viewed from above. The vectors point inward toward the center of the disk.    Fixing the tails of and together in below reveals that is the angle swept out between them and is the vector difference between them.   Reproduction of and from . When the tails of the vectors are fixed together, they are separated by angle and their vector difference is .   Two unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.    Reproducing with the tail of moved to the tail of and additionally included in below makes these relationships even clearer.   Reproduction of with the tail of fixed to the tail of . As shown in , and are separated by angle and their vector difference is .   Two unit direction vectors with their tails fixed together on the edge of a circular disk rotating counter-clockwise about its center viewed from above.    Again, we can use the arc length formula to approximate , and we can take advantage of the fact that, since is a unit direction vector, .     Therefore,     From , we can see that as , and points to the local left, which coincides with the direction. So       Expanding the total derivative of   always points out of the screen no matter where it is placed in the plane of the turntable or above or below the turntable and no matter the angle through which the turntable rotates. Therefore,       Putting everything together for the turntable  Given that , we can find , , and and verify they match the results of , , and , respectively.           Therefore, the derivation is complete.   "
},
{
  "id": "aa-turntable-setup",
  "level": "2",
  "url": "aa-section-turntable.html#aa-turntable-setup",
  "type": "Figure",
  "number": "A.1.1",
  "title": "",
  "body": " View from above of a turntable of radius rotating at constant angular velocity . The unit direction vectors of the local Cartesian coordinate system fixed to the turntable are shown at a point on the edge of the turntable. Vector shows the turntable's constant angular velocity.   Circular disk rotating counter-clockwise about its center viewed from above, with radius and unit direction vectors for a point on its edge.   "
},
{
  "id": "aa-turntable-i-start",
  "level": "2",
  "url": "aa-section-turntable.html#aa-turntable-i-start",
  "type": "Figure",
  "number": "A.1.2",
  "title": "",
  "body": " Unit direction vectors and at two nearby points at radius to the turntable of and separated by angular displacement .   Two unit direction vectors at two nearby points on the edge of a circular disk rotating counter-clockwise about its center viewed from above. The vectors point tangent to the edge of the disk.   "
},
{
  "id": "aa-turntable-i-zoom",
  "level": "2",
  "url": "aa-section-turntable.html#aa-turntable-i-zoom",
  "type": "Figure",
  "number": "A.1.3",
  "title": "",
  "body": " Reproduction of and from . When the tails of the vectors are fixed together, they are separated by angle and their vector difference is .   Two unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.   "
},
{
  "id": "aa-turntable-i-end",
  "level": "2",
  "url": "aa-section-turntable.html#aa-turntable-i-end",
  "type": "Figure",
  "number": "A.1.4",
  "title": "",
  "body": " Reproduction of with the tail of fixed to the tail of . As shown in , and are separated by angle and their vector difference is .   Two unit direction vectors with their tails fixed together on the edge of a circular disk rotating counter-clockwise about its center viewed from above.   "
},
{
  "id": "aa-turntable-j-start",
  "level": "2",
  "url": "aa-section-turntable.html#aa-turntable-j-start",
  "type": "Figure",
  "number": "A.1.5",
  "title": "",
  "body": " Unit direction vectors and at two nearby points at radius to the turntable of and separated by angular displacement .   Two unit direction vectors at two nearby points on the edge of a circular disk rotating counter-clockwise about its center viewed from above. The vectors point inward toward the center of the disk.   "
},
{
  "id": "aa-turntable-j-zoom",
  "level": "2",
  "url": "aa-section-turntable.html#aa-turntable-j-zoom",
  "type": "Figure",
  "number": "A.1.6",
  "title": "",
  "body": " Reproduction of and from . When the tails of the vectors are fixed together, they are separated by angle and their vector difference is .   Two unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.   "
},
{
  "id": "aa-turntable-j-end",
  "level": "2",
  "url": "aa-section-turntable.html#aa-turntable-j-end",
  "type": "Figure",
  "number": "A.1.7",
  "title": "",
  "body": " Reproduction of with the tail of fixed to the tail of . As shown in , and are separated by angle and their vector difference is .   Two unit direction vectors with their tails fixed together on the edge of a circular disk rotating counter-clockwise about its center viewed from above.   "
},
{
  "id": "aa-section-earth",
  "level": "1",
  "url": "aa-section-earth.html",
  "type": "Section",
  "number": "A.2",
  "title": "Derivation for Earth",
  "body": " Derivation for Earth   The derivation for Earth is more complicated than the derivation for the turntable since Earth is spherical and therefore the orientations of and depend on latitude .  But we can connect the derivation for the turntable to Earth by picturing a disk of radius , where is Earth's mean radius, drawn perpendicular to Earth's axis of rotation at latitude , as shown in below. Such a disk rotates with Earth's constant angular velocity , and points perpendicular to the disk. Thus, the disk is like the turntable.  Again, all the unit direction vectors discussed below have an implied subscript \"rot\" since they are attached to Earth, which is a rotating reference frame.   Equatorial projection showing the unit direction vectors of the local Cartesian coordinate system fixed to Earth's surface at radius , perpendicular to Earth's axis of rotation, where is Earth's mean radius and is latitude. Vector shows Earth's constant angular velocity.   A point on Earth's surface with the local Cartesian coordinate system and Earth's angular velocity vector placed at that point.    As shows, at any point fixed to the edge of such a disk drawn perpendicular to Earth's axis of rotation, is tangent to the disk and points to the local east, points to the local north, and points locally upward. While for Earth directly corresponds to for the turntable, as both are tangent to the rotating disk and point in the direction of rotation, and for Earth do not directly correspond to and for the turntable, as does not point directly inward toward the axis of rotation since it does not lie on the disk, and does not point perpendicular to the disk. Instead, points along Earth's surface toward the North Pole, and points perpendicular to Earth's surface toward space.  Also note that does not point in the same direction as , as was the case with the turntable. Instead, points partially in the direction and partially in the direction. But we can still define the angular speed [ ] where [ ] is latitude. By these definitions, during a period of time , the disk rotates through angular displacement .  Note that any point in Earth's atmosphere at latitude can be produced simply by increasing the value of via , where for a point in the atmosphere, as shown in below. Thus, the following derivations apply to any point in Earth's atmosphere as well as on its surface, even though they are presented for a point on Earth's surface for simplicity.  Finally, remember that a \"point\" in Earth's atmosphere refers to a volume element.   Reproduction of , with replaced by to apply to a point in Earth's atmosphere at latitude .   A point in Earth's atmosphere with the local Cartesian coordinate system placed at that point.      Expanding the total derivative of  There are only two differences between the derivation of for a disk at latitude on Earth and the derivation of for the turntable.    points in the direction of rather than in the direction of .     .   Therefore,       Expanding the total derivative of  We split into its component parallel to the disk at latitude      and its component perpendicular to the disk     The component of perpendicular to the disk, , behaves like for the turntable: Its orientation does not change no matter where it is placed in the plane of the disk or at what height it is placed above or below the disk and no matter the angle through which the disk rotates. Consequently, we only need to consider the component of parallel to the disk, .  The following derivation follows that for the turntable, with replaced by . Only the most pertinent steps are reproduced, since the reader can refer to the corresponding turntable derivation for all steps.  To evaluate , we consider the change in 's orientation when its anchoring point is fixed to the edge of the disk and sweeps through angular displacement over time , as shown in below. is the initial position of , and is the final position of after time has passed and it has swept through angular displacement .   North polar projection showing the portions of unit direction vectors and at two nearby points at the edge of the disk of radius from and separated by angular displacement .   Two portions of unit direction vectors at two nearby points on the edge of a circular disk rotating counter-clockwise about its center viewed from above. The vectors point inward toward the center of the disk.    Fixing the tails of and together in below reveals that is the angle swept out between them and is the vector difference between them.   Reproduction of and from . When the tails of the vectors are fixed together, they are separated by angle and their vector difference is .   Two portions of unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.    Reproducing with the tail of moved to the tail of and additionally included in below makes these relationships even clearer.   Reproduction of with the tail of fixed to the tail of . As shown in , and are separated by angle and their vector difference is .   Two portions of unit direction vectors with their tails fixed together on the edge of a circular disk rotating counter-clockwise about its center viewed from above.    Again, we can use the arc length formula to approximate , and we can take advantage of the fact that, since is a unit direction vector, .     From , we can see that as , and points to the local west, which coincides with the direction. So       Expanding the total derivative of  As we did for in , we split into its component parallel to the disk at latitude .     and its component perpendicular to the disk     The component of perpendicular to the disk, , behaves like for the turntable: Its orientation does not change no matter where it is placed in the plane of the disk or at what height it is placed above or below the disk and no matter the angle through which the disk rotates. Consequently, we only need to consider the component of parallel to the disk, .  While there is no equivalent derivation for the turntable for , this is similar to the derivation except that points outward away from the center of the disk rather than inward toward the center of the disk.  The following derivation follows that for the turntable for , with replaced by . Only the most pertinent steps are reproduced, since the reader can refer to the corresponding turntable derivation for all steps.  To evaluate , we consider the change in 's orientation when its anchoring point is fixed to the edge of the disk and sweeps through angular displacement over time , as shown in below. is the initial position of , and is the final position of after time has passed and it has swept through angular displacement .   North polar projection showing the portions of unit direction vectors and at two nearby points at the edge of the disk of radius from and separated by angular displacement .   Two portions of unit direction vectors at two nearby points on the edge of a circular disk rotating counter-clockwise about its center viewed from above. The vectors point outward from the center of the disk.    Fixing the tails of and together in below reveals that is the angle swept out between them and is the vector difference between them.   Reproduction of and from . When the tails of the vectors are fixed together, they are separated by angle and their vector difference is .   Two portions of unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.    Reproducing with the tail of moved to the tail of and additionally included in below makes these relationships even clearer.   Reproduction of with the tail of fixed to the tail of . As shown in , and are separated by angle and their vector difference is .   Two portions of unit direction vectors with their tails fixed together on the edge of a circular disk rotating counter-clockwise about its center viewed from above.    Again, we can use the arc length formula to approximate , and we can take advantage of the fact that, since is a unit direction vector, .     From , we can see that as , and points to the local east, which coincides with the direction. So       Putting everything together for Earth  As shown in below,     Thus, we can find , , and and verify they match the results of , , and , respectively.           Therefore, the derivation is complete.   Reproduction of , with a copy of moved to the point of interest on Earth's surface.   A point on Earth's surface with the local Cartesian coordinate system and the Earth's angular velocity vector placed at that point.     "
},
{
  "id": "aa-earth-setup",
  "level": "2",
  "url": "aa-section-earth.html#aa-earth-setup",
  "type": "Figure",
  "number": "A.2.1",
  "title": "",
  "body": " Equatorial projection showing the unit direction vectors of the local Cartesian coordinate system fixed to Earth's surface at radius , perpendicular to Earth's axis of rotation, where is Earth's mean radius and is latitude. Vector shows Earth's constant angular velocity.   A point on Earth's surface with the local Cartesian coordinate system and Earth's angular velocity vector placed at that point.   "
},
{
  "id": "aa-earth-setup-atmosphere",
  "level": "2",
  "url": "aa-section-earth.html#aa-earth-setup-atmosphere",
  "type": "Figure",
  "number": "A.2.2",
  "title": "",
  "body": " Reproduction of , with replaced by to apply to a point in Earth's atmosphere at latitude .   A point in Earth's atmosphere with the local Cartesian coordinate system placed at that point.   "
},
{
  "id": "aa-earth-j-start",
  "level": "2",
  "url": "aa-section-earth.html#aa-earth-j-start",
  "type": "Figure",
  "number": "A.2.3",
  "title": "",
  "body": " North polar projection showing the portions of unit direction vectors and at two nearby points at the edge of the disk of radius from and separated by angular displacement .   Two portions of unit direction vectors at two nearby points on the edge of a circular disk rotating counter-clockwise about its center viewed from above. The vectors point inward toward the center of the disk.   "
},
{
  "id": "aa-earth-j-zoom",
  "level": "2",
  "url": "aa-section-earth.html#aa-earth-j-zoom",
  "type": "Figure",
  "number": "A.2.4",
  "title": "",
  "body": " Reproduction of and from . When the tails of the vectors are fixed together, they are separated by angle and their vector difference is .   Two portions of unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.   "
},
{
  "id": "aa-earth-j-end",
  "level": "2",
  "url": "aa-section-earth.html#aa-earth-j-end",
  "type": "Figure",
  "number": "A.2.5",
  "title": "",
  "body": " Reproduction of with the tail of fixed to the tail of . As shown in , and are separated by angle and their vector difference is .   Two portions of unit direction vectors with their tails fixed together on the edge of a circular disk rotating counter-clockwise about its center viewed from above.   "
},
{
  "id": "aa-earth-k-start",
  "level": "2",
  "url": "aa-section-earth.html#aa-earth-k-start",
  "type": "Figure",
  "number": "A.2.6",
  "title": "",
  "body": " North polar projection showing the portions of unit direction vectors and at two nearby points at the edge of the disk of radius from and separated by angular displacement .   Two portions of unit direction vectors at two nearby points on the edge of a circular disk rotating counter-clockwise about its center viewed from above. The vectors point outward from the center of the disk.   "
},
{
  "id": "aa-earth-k-zoom",
  "level": "2",
  "url": "aa-section-earth.html#aa-earth-k-zoom",
  "type": "Figure",
  "number": "A.2.7",
  "title": "",
  "body": " Reproduction of and from . When the tails of the vectors are fixed together, they are separated by angle and their vector difference is .   Two portions of unit direction vectors with their tails fixed together and the angle swept out between them and their vector difference annotated.   "
},
{
  "id": "aa-earth-k-end",
  "level": "2",
  "url": "aa-section-earth.html#aa-earth-k-end",
  "type": "Figure",
  "number": "A.2.8",
  "title": "",
  "body": " Reproduction of with the tail of fixed to the tail of . As shown in , and are separated by angle and their vector difference is .   Two portions of unit direction vectors with their tails fixed together on the edge of a circular disk rotating counter-clockwise about its center viewed from above.   "
},
{
  "id": "aa-earth-omega",
  "level": "2",
  "url": "aa-section-earth.html#aa-earth-omega",
  "type": "Figure",
  "number": "A.2.9",
  "title": "",
  "body": " Reproduction of , with a copy of moved to the point of interest on Earth's surface.   A point on Earth's surface with the local Cartesian coordinate system and the Earth's angular velocity vector placed at that point.   "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
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
