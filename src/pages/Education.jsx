import React from 'react';

function Education() {
    return (
        <section className="education-section sec-p100-bg-bs mb-30 clearfix" id="education">

            <div className="Section-title">
                <h2>
                    <i className="fa fa-graduation-cap" aria-hidden="true"/>
                    Образование
                </h2>
                <span>Образование</span>
                <p>
                    Proin gravida nibh vel velit quet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
                    elit consequat
                    ipsum, nec sagittis sem nibh id elit. Duis sed odio sit
                    amet nibh vulpuate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus
                    a odio
                    tincidunt.
                </p>
            </div>

            <ul className="accordion collapsible" data-collapsible="accordion">
                <li>
                    <div className="accordion-header acco-clr1 collapsible-header active">
						<span className="icon">
							<i className="fa fa-pencil" aria-hidden="true"/>
						</span>
                        <p>
                            <strong>Master Degree of design</strong> - Abc University of Los Angeles , 2015
                            - 2016
                        </p>
                    </div>
                    <div className="accordion-body collapsible-body">
						<span>
							Successfully passed MBA’ on year 2015 - 2016 scoring CGPA 4.00 out of 4.00. The study fields were Cpmputer Architecture, Calculus, Physics Fundamental of Physics, Chemistry, Integral Mathematics. ABC University of los Angeles.
						</span>
                    </div>
                </li>

                <li>
                    <div className="accordion-header acco-clr2 collapsible-header active">
						<span className="icon">
							<i className="fa fa-pencil" aria-hidden="true"/>
						</span>
                        <p>
                            <strong>Bachelor Degree of C.A.</strong> - Vikarm University of Ujjain , 2014 -
                            2015
                        </p>
                    </div>
                    <div className="accordion-body collapsible-body">
						<span>
							Successfully passed MBA’ on year 2015 - 2016 scoring CGPA 4.00 out of 4.00. The study fields were Cpmputer Architecture, Calculus, Physics Fundamental of Physics, Chemistry, Integral Mathematics. ABC University of los Angeles.
						</span>
                    </div>
                </li>

                <li>
                    <div className="accordion-header acco-clr3 collapsible-header active">
						<span className="icon">
							<i className="fa fa-pencil" aria-hidden="true"/>
						</span>
                        <p>
                            <strong>Diploma in Computer</strong> - RGCSM , 2013 - 2014
                        </p>
                    </div>
                    <div className="accordion-body collapsible-body">
						<span>
							Successfully passed MBA’ on year 2015 - 2016 scoring CGPA 4.00 out of 4.00. The study fields were Cpmputer Architecture, Calculus, Physics Fundamental of Physics, Chemistry, Integral Mathematics. ABC University of los Angeles.
						</span>
                    </div>
                </li>

                <li>
                    <div className="accordion-header acco-clr4 collapsible-header active">
						<span className="icon">
							<i className="fa fa-pencil" aria-hidden="true"/>
						</span>
                        <p>
                            <strong>Higher Secondry Education</strong> - M.p. Board Bhopal , 2012 - 2013
                        </p>
                    </div>
                    <div className="accordion-body collapsible-body">
						<span>
							Successfully passed MBA’ on year 2015 - 2016 scoring CGPA 4.00 out of 4.00. The study fields were Cpmputer Architecture, Calculus, Physics Fundamental of Physics, Chemistry, Integral Mathematics. ABC University of los Angeles.
						</span>
                    </div>
                </li>

                <li>
                    <div className="accordion-header acco-clr5 collapsible-header active">
						<span className="icon">
							<i className="fa fa-pencil" aria-hidden="true"/>
						</span>
                        <p>
                            <strong>High School Degree</strong> - M.p. Board Bhopal , 2011 - 2014
                        </p>
                    </div>
                    <div className="accordion-body collapsible-body">
						<span>
							Successfully passed MBA’ on year 2015 - 2016 scoring CGPA 4.00 out of 4.00. The study fields were Cpmputer Architecture, Calculus, Physics Fundamental of Physics, Chemistry, Integral Mathematics. ABC University of los Angeles.
						</span>
                    </div>
                </li>
            </ul>

        </section>
    );
}

export default Education;