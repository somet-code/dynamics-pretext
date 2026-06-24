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
  "body": " Continuum approximation  Earth's atmosphere is composed of a mixture of gases: molecular nitrogen ( ), molecular oxygen ( ), water vapor ( ), and others. Individual gas particles (which include both atoms and molecules) are very small, and much empty space generally lies between them on average. Each gas particle moves continuously and randomly, although larger-scale ordered motion like the wind can be superimposed on a collection of gas particles.  Smaller numbers of suspended liquid and solid particles like cloud droplets, ice crystals, and particulate matter occupy a small bit of the empty space between gas particles, with concentrations varying amounts in space and time. Briefly, precipitation particles reside in the atmosphere as they make their way from their parent clouds to the ground.  Keeping track of the largely random motions of numerous discrete particles in Earth's atmosphere is unnecessary for our purposes, since even the smallest atmospheric motions we are interested in occur on scales multiple orders of magnitude larger than microscopic intermolecular distances. Instead, we make use of the continuum approximation : We assume the atmosphere's mass is continuously distributed in space rather than held in discrete particles. This approximation commonly is made for fluids of sufficient density.  Points within the atmospheric continuum are not geometric points without size, but instead are volume elements of any convenient shape that are infinitesimally small yet contain many discrete particles. An example of a volume element is shown in below.   A volume element in the shape of a rectangular prism. Its edges are parallel to the -, -, and -axes and have lengths , , and , respectively. Its center has coordinates .   Rectangular prism with center point and length, width, and height.    We assume the discrete particles contained within a volume element are distributed homogeneously through it. Local averages of temperature, pressure, density, velocity, and other state variables describe the volume elements at any moment in time without reference to the volume element's history and are assumed to be uniform throughout the volume element. A representative value of any state variable is measured at the center of the volume element. For example, the pressure measured at is given by , as shown in below.   The volume element of , with pressure measured at its center.   Rectangular prism with measurement at center point and length, width, and height.    Some volume elements move through Earth's atmosphere with velocity (and we assume all discrete particles within the element move at this velocity); other volume elements remain fixed to specific locations on Earth's surface or within its atmosphere while many mobile volume elements flow through their open boundaries with velocity . The former volume elements, whose paths through the atmosphere can be tracked over time, often are called air parcels , air particles , material elements , or material volumes , and the portion of the atmosphere through which they move is called their environment . The latter volume elements, whose locations are centered at permanent locations in the Earth system for all time, often are called control volumes . These different behaviors of fluid elements lead to two different but connected frameworks from which we can conceptualize atmospheric flow: the Lagrangian framework and the Eulerian framework. We will explore these frameworks in SEC below.   below summarizes the essential components of the continuum approximation: shows a simple depiction of discrete particles in Earth's atmosphere, and shows volume elements imposed within the atmosphere, each containing many discrete particles.      A vertical cross-section through Earth's atmosphere, where the green rectangle represents the ground and blue circles represent discrete atmospheric particles.   Vertical cross-section through Earth's atmosphere, which is filled with discrete particles that become more spaced apart with height.     The atmospheric cross-section shown in is decomposed into volume elements, each of which contain multiple discrete particles.   Vertical cross-section through Earth's atmosphere, which is filled with discrete particles that become more spaced apart with height, with adjacent volume elements enclosing collections of discrete particles.      "
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
  "id": "ch1-section-calculus",
  "level": "1",
  "url": "ch1-section-calculus.html",
  "type": "Section",
  "number": "1.2",
  "title": "Calculus",
  "body": " Calculus   If we further assume state variables are described by differentiable functions of time and three-dimensional space (i.e., if we assume the values any given state variable takes on do not sharply jump from volume element to volume element but instead vary continuously and smoothly in time and space), then we can apply calculus and differential equations to describe and predict changes in these atmospheric properties.  We will review relevant calculus below as well as introduce a twist on the chain rule for multivariable functions that helps us view atmospheric flow from different perspectives.    Partial differentiation  A function has an ordinary derivative denoted by (called Lagrange's notation or prime notation) or (called Leibniz's notation). \"Ordinary\" means is a function of only one independent variable.  In meteorology, we typically deal with more complicated functions of several independent variables denoting time and space.  Consider a state variable measured within an air parcel. While is depicted here as a scalar quantity for simplicity, be aware that it could represent a vector quantity.  To isolate the rate at which is changing as changes, we take the partial derivative of with respect to . This partial derivative can be denoted by or ; the latter notation is preferred in this text.  When finding , we hold , , and constant. It follows that an alternative, explicit notation for the partial derivative of with respect to is     where the subscripts indicate which independent variables are held constant.  Likewise,           While the subscripts often will be omitted for brevity, we will use them whenever greater clarity on which independent variables are held constant is needed.    Vector algebra and calculus   Section 1.2.1 of Martin has a very thorough review of relevant vector algebra and calculus, and you should work through it carefully. A few especially important or possibly less familiar topics are briefly discussed next.    Right-hand rule  The right-hand rule is a convention used to define the orientations of coordinate axes and vectors. The -, -, and -axes of the Cartesian coordinate system are oriented perpendicular to each other following the right-hand rule ( ), and the right-hand rule determines the direction of the vector that results from the cross product of two other vectors ( ). See Wikipedia's right-hand rule page for instructions and visuals on how to use the right-hand rule either with your index and middle fingers and thumb or with curled fingers.      The right-hand rule applied to the -, -, and -axes of the Cartesian coordinate system, where the arrows show the sense of the right-hand rule for any combination of two axes.   Three straight orthogonal arrows representing the x-, y-, and z-axes of the Cartesian coordinate system, and curved arrows showing the sense of the right-hand rule for any combination of two axes.     The right-hand rule applied to the cross product (left) and the cross product (right), where the curved red arrows show the sense of the right-hand rule. Note the cross product is not commutative, so points in the opposite direction as .   (left) The cross product of two vectors and (right) the cross product of the same two vectors but in reverse order.      Two options for finding the orientation of the vector that results from the cross product of two other vectors by applying the right-hand rule to a human's right hand are shown in below. Make sure to use the right hand, not the left hand, or the results of your cross products will point opposite their correct directions!      The right-hand rule using the four fingers that point together in the direction of vector , the palm that points in the direction of vector , and the thumb that points in the direction of the vector that results from the cross product of a human's right hand. Reproduced with modified vector annotations from P.wormer via Wikimedia Commons under CC BY-SA 3.0 .   The right-hand rule using the four fingers that point together in the direction of vector A, the palm that points in the direction of vector B, and the thumb that points in the direction of the vector that results from the cross product A x B of a human's right hand.     The right-hand rule using the index finger that points in the direction of vector , the middle finger that points in the direction of vector , and the thumb that points in the direction of the vector that results from the cross product of a human's right hand. Reproduced with modified vector annotations from Sepitropova via Wikimedia Commons under CC BY-SA 4.0 .   The right-hand rule using the index finger that points in the direction of vector A, the middle finger that points in the direction of vector B, and the thumb that points in the direction of the vector that results from the cross product A x B of a human's right hand.        Del  The operator , which is called del , nabla , or the gradient operator , is used to find the following important quantities.     The gradient of , , gives the magnitude and direction of the maximum change of the scalar field .    The divergence of , , gives the outward flux of the vector field .    The curl of , , gives the rotation of the vector field .    The Laplacian of , , gives the divergence of the gradient of the scalar field .    is called the Laplace operator . It occasionally is given by the symbol .        Del's important definitions and properties are described on Wikipedia's del page .    Properties of dot and cross products  We will employ several properties of dot and cross products in derivations. Wikipedia's dot product page and cross product page list many useful properties, and I recommend the reader refer to them as needed. Some properties we will use in derivations include     scalar multiplication with a cross product , where is a scalar;    the distributive property of cross products over addition ; and    the vector triple product  and .        Taylor series   You learned in a calculus course that an infinitely differentiable function can be approximated by and sometimes perfectly represented by its Taylor series expansion at as given by       -order approximations  We often create an -order approximation of using its -order Taylor polynomial , which is the polynomial of degree formed from the partial sum of . For example, the first-order approximation of (also called its linear approximation ) is given by its first-order Taylor polynomial     and the second-order approximation of is given by its second-order Taylor polynomial     In many atmospheric dynamics applications, terms of second order and higher are grouped together as \" higher-order terms \" and are neglected in Taylor series expansions of state variables. Thus, state variables often are represented by their first-order approximations.     Total differentiation  Consider a state variable measured within an air parcel. Again, while is depicted here as a scalar quantity for simplicity, be aware that it could represent a vector quantity.  If the air parcel's position changes with time as it moves through the atmosphere, then , , and . Consequently, is a differentiable function of , and so we can quantify the time rate of change of within the air parcel by calculating . We do this using the chain rule for multivariable functions :     Since , simplifies to     where the terms have been rearranged to match standard presentations.   is the formula for the total derivative of .  Furthermore, , , and are the zonal , meridional , and vertical components of the air parcel's full (three-dimensional) velocity (i.e., wind) vector , respectively, and so becomes     Finally, we can use the gradient of , , to rewrite as     In most texts, is replaced with to emphasize this derivative differs from the ordinary derivative of a function of a single variable. Going forward, I will adopt this notation as shown in below to be consistent with standard presentations.     Since can be any scalar or vector state variable, we often write the total derivative as an operator:     where any state variable scalar or vector could be inserted into the parentheses.  Frequently, we use the following rearrangement of :     This arrangement more readily lends itself to physical interpretation. We interpret the terms of as follows.      is the Eulerian derivative (also called the local derivative ) that gives the rate at which is changing with respect to time at a fixed geographic point (i.e., at a specific location on Earth's surface or within its atmosphere) as air parcels move through that location. It is named after Leonhard Euler , who contributed significantly to fluid dynamics as well as mathematics, optics, astronomy, and other fields.     is the Lagrangian derivative (also called the total derivative , material derivative , substantial derivative , advective derivative , convective derivative , and individual derivative ) that gives the rate at which is changing with respect to time within a moving air parcel, following the air parcel as it moves through the atmosphere. We can think of the Lagrangian derivative as describing sources and sinks of within the air parcel. Sometimes it is described as the time rate of change \"following the motion\" or \"with the flow.\" It is named after Joseph-Louis Lagrange , who succeeded and collaborated with Euler and also made significant contributions to these fields.     is advection : the rate of importation at a fixed location by the wind of some atmospheric property carried within air parcels. In particular, advection gives the rate of change of the atmospheric property at a fixed location on Earth, due to the transport of air parcels by the wind through the location.   Be careful about the negative sign! The negative sign is part of the advection formula, and therefore for positive advection and for negative advection.    The negative of advection, (note the absence of the negative sign!), is called the convective derivative . Yes, this is confusing since the Lagrangian derivative also can be called the convective derivative. But in most sources, \"convective derivative\" refers to the negative of advection, not to the Lagrangian derivative.        For example, if we replace in with temperature (which means we implicitly are assuming ), we get     where is the local time rate of change of temperature (i.e., the local temperature tendency ), is the time rate of change of temperature within an air parcel caused by diabatic processes (i.e., it is the diabatic heating rate caused by radiative heating or cooling, latent heat release or absorption, conduction, and\/or mixing), and is temperature advection , where for warm advection and for cold advection.  The difference between the Lagrangian and Eulerian frameworks is visualized in below.      In a Eulerian framework, state variables are measured within a control volume at a fixed location relative to Earth (dashed box) as air parcels (solid boxes) flow through its open boundaries.   An air parcel shown at three successive times as it passes through a control volume.     In a Lagrangian framework, state variables are measured within an air parcel as it moves through Earth's atmosphere.   An air parcel shown at three successive times as it moves through Earth's atmosphere.      It becomes clear from that the time rate of change of measured at a fixed location on Earth is due to the advection by the wind of air parcels through the location as well as the changes in inside the air parcels as they move through the location.  If , we say is conserved following the motion. In other words, remains constant within air parcels as they move through the atmosphere. But shows that, even if is conserved within air parcels, local changes in still can occur due to advection.  In summary, and give us two distinct but related frameworks by which we can measure change in state variables: the Lagrangian framework and the Eulerian framework .   "
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
  "body": "    The right-hand rule applied to the -, -, and -axes of the Cartesian coordinate system, where the arrows show the sense of the right-hand rule for any combination of two axes.   Three straight orthogonal arrows representing the x-, y-, and z-axes of the Cartesian coordinate system, and curved arrows showing the sense of the right-hand rule for any combination of two axes.     The right-hand rule applied to the cross product (left) and the cross product (right), where the curved red arrows show the sense of the right-hand rule. Note the cross product is not commutative, so points in the opposite direction as .   (left) The cross product of two vectors and (right) the cross product of the same two vectors but in reverse order.     "
},
{
  "id": "ch1-right-hand-rule-hands",
  "level": "2",
  "url": "ch1-section-calculus.html#ch1-right-hand-rule-hands",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": "    The right-hand rule using the four fingers that point together in the direction of vector , the palm that points in the direction of vector , and the thumb that points in the direction of the vector that results from the cross product of a human's right hand. Reproduced with modified vector annotations from P.wormer via Wikimedia Commons under CC BY-SA 3.0 .   The right-hand rule using the four fingers that point together in the direction of vector A, the palm that points in the direction of vector B, and the thumb that points in the direction of the vector that results from the cross product A x B of a human's right hand.     The right-hand rule using the index finger that points in the direction of vector , the middle finger that points in the direction of vector , and the thumb that points in the direction of the vector that results from the cross product of a human's right hand. Reproduced with modified vector annotations from Sepitropova via Wikimedia Commons under CC BY-SA 4.0 .   The right-hand rule using the index finger that points in the direction of vector A, the middle finger that points in the direction of vector B, and the thumb that points in the direction of the vector that results from the cross product A x B of a human's right hand.     "
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
  "body": "Lagrangian framework Eulerian framework "
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
