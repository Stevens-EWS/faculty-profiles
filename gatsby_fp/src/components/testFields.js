import React from "react"

/*got rid of HR tag, was giving an error*/

const Fields = () => (
  <>
    <h1 className="biotitle"> Sandeep Bhatt</h1>
    <div className="table_wrapper">
      <div className="table_wrapper_inner">
        <table
          cellPadding="5"
          cellSpacing="0"
          border="0"
          className="bioregion"
          width="100%"
        >
          <tbody>
            <tr>
              <td valign="top" align="left" width="160px">
                <img
                  src="//web.stevens.edu/ses/images/fileadmin/images/Bhatt.jpg"
                  className="bioimage"
                  style={{ maxWidth: "150px" }}
                />
              </td>
              <td valign="top" align="left">
                <div className="table_wrapper">
                  <div className="table_wrapper_inner">
                    <table cellPadding="0" cellSpacing="0" border="0">
                      <tbody>
                        <tr>
                          <td valign="top">TEACHING PROFESSOR</td>
                        </tr>
                        <tr>
                          <td valign="top">
                            School: Schaefer School of Engineering &amp; Science
                          </td>
                        </tr>
                        <tr>
                          <td valign="top">Department: Computer Science</td>
                        </tr>
                        <tr>
                          <td valign="top">Building: Gateway South Building</td>
                        </tr>
                        <tr>
                          <td valign="top">Room: 427</td>
                        </tr>
                        <tr>
                          <td valign="top">Phone: +1 (201) 216-8249</td>
                        </tr>
                        <tr>
                          <td valign="top">Email: sandeep.bhatt@stevens.edu</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="sectiontitle">Education</div>
    <div>
      <ul>
        <li>Ph.D. (1984)&nbsp; Massachusetts Institute of Technology</li>
        <li>S.M.&nbsp; (1980)&nbsp; Massachusetts Institute of Technology</li>
        <li>
          S.B.&nbsp; (1978)&nbsp; &nbsp;Massachusetts Institute of Technology
        </li>
      </ul>
    </div>
    <div className="sectiontitle">Professional Service</div>
    <div>
      <h5>Editorial Boards</h5>
      <ul>
        <li>Journal of Interconnection Networks, 1999-2001.</li>
        <li>
          Discrete Mathematics and Theoretical Computer Science, 1996-1999.
        </li>
        <li>
          Theory of Computing Systems (formerly Mathematical Systems Theory),
          1991-2000
        </li>
        <li>SIAM Journal of Discrete Mathematics, 1995-1999</li>
      </ul>
      <h5>DIMACS (NSF S&amp;T Center)</h5>
      <ul>
        <li>Executive Commitee and Council, 1996-1999, 2004-2008</li>
        <li>
          Organizer, Workshop on end-to-end traffic modeling and simiulations,
          October 1997
        </li>
        <li>Steering Committee, Special Year on Networks, 1996-97.</li>
        <li>
          Steering Committee, Special Year on Parallel Algorithms, 1993-94.
        </li>
        <li>
          Organizer, DIMACS Parallel Implementation Challenge and Woorkshop,
          1993.
        </li>
      </ul>
      <h5>Program Committees</h5>
      <ul>
        <li>International Conference on Parallel Processing, 2003.</li>
        <li>Chair, DARPA ISAT study on "Smart Data," 1998.</li>
        <li>Workshop, Randomized Parallel Algorithms, IPPS, 1996,1998.</li>
        <li>ACM Symposium on Parallel Algorithms and Architectures, 1995.</li>
        <li>
          Chair, IEEE Symposium on Parallel and Distributed Processing, 1993.
        </li>
        <li>ACM Symposium on Theory of Computing, 1993.</li>
        <li>AEEE Symposium on Parallel and Distributed Processing, 1992.</li>
        <li>Brown-MIT Conference on Advanved Research in VLSI, 1992.</li>
        <li>ACM Symposium on Parallel Algorithms and Architectures, 1992.</li>
        <li>
          Session Chair, Parallel Computation Networks, SIAM Annual Meeting,
          1990.
        </li>
      </ul>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </div>
    <div className="sectiontitle">Appointments</div>
    <div>
      <ul>
        <li>
          2017 –&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Teaching Professor, Computer
          Science, Stevens Institute of Technology.
        </li>
        <li>
          2004 – 2016 Principal Research Scientist, Hewlett-Packard Labs,
          Princeton NJ.
        </li>
        <li>
          2002 – 2004 Senior Research Scientist, Telcordia Technologies,
          Morristown NJ.
        </li>
        <li>
          1999 – 2002 Director, Systems Performance, Akamai Technologies,
          Cambridge MA.
        </li>
        <li>
          1992 – 1999 Director, Network Algorithms, Bell Communications
          Research, Morristown NJ.
        </li>
        <li>
          1993 – 1999 Research Professor of Computer Science, Rutgers
          University, New Brunswick NJ.
        </li>
        <li>
          1990&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Visiting Associate
          Professor of Computer Science, California Institute
          of&nbsp;Technology, Pasadena CA.
        </li>
        <li>
          1984 – 1992 Associate Professor of Computer Science, Yale University,
          New Haven CT.
        </li>
      </ul>
    </div>
    <div className="sectiontitle">Grants, Contracts &amp; Funds</div>
    <div>
      <ul>
        <li>
          DARPA: Managing networks of firewalls using smart data, Telcordia
          Technologies, 1999- 2002.
        </li>
        <li>
          DARPA: Scalable Self-organizing Simulations (S3), DIMACS,&nbsp; (with
          Rutgers, Georgia Tech, Boston University and Dartmouth), 1996-99.
        </li>
        <li>
          ONR: Scalable Abstractions and Formal Methods for Computational
          Science, Rutgers, 1993-96.
        </li>
        <li>
          DARPA: Compiler Technology for Massively Parallel Architectures, Yale,
          1991-94.
        </li>
        <li>
          NSF/DARPA Joint Initiative on Parallel Computing Theory, Algorithmic
          Issues for Very High-Level Parallel Programming, Yale,
          1989-1992.&nbsp;&nbsp;
        </li>
        <li>
          AFOSR: Efficient Communication for Parallel Computing, Yale,
          1989-1992.&nbsp; &nbsp;
        </li>
        <li>
          NSF: The Efficient Use of Parallel Computers, Yale, 1989-1992.&nbsp;
          &nbsp;
        </li>
        <li>
          NSF: Techniques for Graph Embedding, with Applications to Parallel
          Computing, Yale, 1986- 1989.
        </li>
      </ul>
    </div>
    <div className="sectiontitle">Patents &amp; Inventions</div>
    <div>
      <ul>
        <li>
          Hierarchical Recursive Image Segmentation. Patent No. US8345974B2.
        </li>
        <li>Threat Exchange Information Protection. Patent No. US9143517B2.</li>
        <li>End-to-end Network Access Analysis. Patent No. US9253038B2.</li>
        <li>
          Identifying participants for collaboration in a Threat Exchange
          Community. Patent No. US9275348B2.
        </li>
        <li>Attack Notification. Patent No. US9456001B2.</li>
      </ul>
    </div>
    <div className="sectiontitle">Selected Publications</div>
    <div className="publicationtitle">Journals</div>
    <ol>
      <li>
        S. N. Bhatt, P. Manadhata and L. Zomlot. (2014). "The Operational Role
        of Security Information and Event Management Systems in Security
        Operations Centers", IEEE Security and Privacy, IEEE.
      </li>
      <li>
        S.N. Bhatt, G. Bilardi and G. Pucci. "Area-Time Tradeoffs for Universal
        VLSI Circuits", Theoretical Computer Science, 408 (2-3), 143-150.
      </li>
      <li>
        W. Aiello, S.N. Bhatt, F. Chung, A. Rosenberg and R. Sitaraman. (2001).
        "Augmented Ring Networks", IEEE Transactions on Parallel and Distributed
        Systems , IEEE. 12 (6), 598-609.
      </li>
      <li>
        S.N. Bhatt, P. Liu and W. Aiello. (2001). "Tree Search on an Atomic
        Model for Message Passing", SIAM J. Computing, SIAM. 31 67-85.
      </li>
      <li>
        S.N. Bhatt and P. Liu. (2000). "Experiences with parallel N-body
        simulation", IEEE Transactions on Parallel and Distributed Systems,
        IEEE. 12 1306-1323.
      </li>
      <li>
        S.N. Bhatt, D. Greenberg, F.T. Leighton and Pangfeng Liu. (1999). "Tight
        bounds for on-line tree embeddings", SIAM Journal of Computing, SIAM. 29
        474-491.
      </li>
      <li>
        M. Andrews, S.N. Bhatt and K. Perumalla. "TED models for ATM
        Internetworks", ACM SIGMETRICS Performance Evaluation Review, ACM. 25
        (4), 12-21.
      </li>
      <li>
        S.N. Bhatt, G. Bilardi, K. Herley, G. Pucci, and A. Ranade. (1998).
        "Tight bounds on parallel list marking", J. Parallel and Distributed
        Computing , 51 (2), 75-88.
      </li>
      <li>
        S.N. Bhatt, R. Fujimoto, A. Ogielski and K. Perumalla. (1998). "Parallel
        simulation techniques for large-scale networks", IEEE Communications
        Special Issue, IEEE. 36.
      </li>
      <li>
        S.N. Bhatt, F. Chung, F.T. Leighton, and A.L. Rosenberg. (1997). "On
        Optimal Strategies for Cycle-Stealing in Networks of Workstations", IEEE
        Transactions on Computers, IEEE. 46 (5).
      </li>
      <li>
        S.N. Bhatt, F. Chung, J.W. Hong, F.T. Leighton, B. Obrenic, A.L.
        Rosenberg and E. Schwabe. (1996). "Optimal emulations by butterfly-like
        networks", J. ACM, ACM. 43 (2), 293-330.
      </li>
      <li>
        S.N. Bhatt, G. Bilardi, G. Pucci, A. Ranade, A.L. Rosenberg, and E.
        Schwabe. (1996). "On bufferless routing of variable length messages in
        leveled networks", IEEE Transactions on Computers, IEEE. 45.
      </li>
      <li>
        S.N. Bhatt, F. Chung, F.T. Leighton and A.L. Rosenberg. (1995). "Salvage
        embeddings of complete trees", SIAM Journal of Discrete Mathematics,
        SIAM. 8 (4), 617-637.
      </li>
      <li>
        S.N. Bhatt, G. Pucci, A. Ranade, and A.L. Rosenberg. (1993). "Scattering
        and gathering messages in interconnection networks", IEEE Transactions
        on Computers , IEEE. 42 938-949.
      </li>
      <li>
        S.N. Bhatt and Jin-Yi Cai. (1993). "Taking random walks to grow trees in
        hypercubes", J. ACM, ACM. 40 741-764.
      </li>
      <li>
        S.N. Bhatt, F. Chung, F.T. Leighton and A.L. Rosenberg. (Feb 1992).
        "Efficient embeddings of trees in hypercubes", SIAM J. Computing, SIAM.
        21 (1), 151-162.
      </li>
      <li>
        S.N. Bhatt, F. Chung and A. Rosenberg. (1991). "Partitioning circuits
        for improved testability", Special issue on VLSI algorithms,
        Algorithmica, (6), 37-48.
      </li>
      <li>
        S.N. Bhatt and David S. Greenberg. (1991). "Routing multiple paths in
        hypercubes", Mathematical Systems Theory, (24), 295-321.
      </li>
      <li>
        S.N. Bhatt, F. Chung, F.T. Leighton and A.L. Rosenberg. (1989).
        "Universal graphs for bounded-degree trees and planar graphs", SIAM
        Journal on Discrete Mathematics, SIAM. (2), 145-155.
      </li>
      <li>
        S.N. Bhatt and S.S. Cosmadakis. (1987). "The complexity of minimizing
        wire lengths for VLSI layouts", Information Processing Letters, (25).
      </li>
      <li>
        S.N. Bhatt and C.E. Leiserson. (1984). "How to assemble tree machines",
        F. Preparata, Advances in Computing Research, JAI Press. 2.
      </li>
      <li>
        B.S. Baker, S.N. Bhatt and F.T. Leighton. (1984). "An approximation
        algorithm for Manhattan routing", F. Preparata, Advances in Computing
        Research, JAI Press. 2.
      </li>
      <li>
        S.N. Bhatt and F.T. Leighton. (1984). "A framework for solving VLSI
        graph layout problems", Journal of Computer and System Sciences.
      </li>
    </ol>
    <div className="publicationtitle">Conference Proceedings</div>
    <ol>
      <li>
        S. Sundaramurthy, S.N. Bhatt and M. Eisenbarth. (2012). "Examining
        Intrusion Prevention System Events from Worldwide Networks", ACM CCS
        Badgers Workshop. ACM.
      </li>
      <li>
        S.N. Bhatt, J. Collinge, S. Haber, W. Horne, S. Pramanik, S.
        Rajagopalan, T. Sander and A. Singla. (2012). "Automated Sharing of
        Security Threats Across Organizations", Hewlett-Packard TechCon
        Proceedings.
      </li>
      <li>
        R. Bergman, S.N. Bhatt, W. Horne, R. Keshet, H. Nachlileli and M. Shaw.
        (2009). "Fully Automated, Perceptually Accurate Image Segmentation",
        HPICS .
      </li>
      <li>
        S.N. Bhatt, W. Horne and P. Rao. (2011). "On Computing Enterprise IT
        Risk Metrics", IFIP Security and Privacy Conference (SEC).
      </li>
      <li>
        Y. Beres, S.N. Bhatt, W. Horne and T. Schreider. (2009). "Applying
        Analytics to Risk Assessment: Security Control Portfolio Optimization",
        Hewlett-Packard TechCon Proceedings.
      </li>
      <li>
        S.N. Bhatt, S. Bandhakavi, C. Okita and P. Rao. (2009). "Analyzing
        end-to-end network reachability", IEEE Integrated Management Workshop.
        IEEE.
      </li>
      <li>
        S.N. Bhatt, C. Okita and P. Rao. (2008). "Metrics-based firewall
        management", Proceedings of Metricon.
      </li>
      <li>
        S.N. Bhatt, C. Okita and P. Rao. (2008). "Fast, Cheap and In Control: A
        Step towards pain-free security", 22nd Usenix LISA Conference.
      </li>
      <li>
        I. Band, S.N. Bhatt, W. Horne, J. Pato, S. Rajagopalan and P. Rao.
        (2006). "How to validate enterprise access policies", Hewlett-Packard
        TechCon Proceedings .
      </li>
      <li>
        S.N. Bhatt, S. Rajagopalan and P. Rao. (2003). "Automated Network
        Security Policy Enforcement using Smart Firewalls", Proceedings of
        MILCOM.
      </li>
      <li>
        S.N. Bhatt, S. Rajagopalan and P. Rao. (2003). "Federated security
        management for dynamic coalitions", DARPA Information Survivability
        Conference and Exposition.
      </li>
      <li>
        S.N. Bhatt, S. Even, D. Greenberg and R. Tayar. (2000). "Simple
        algorithms to traverse directed eulerian mazes", Proceedings of WG'2000,
        U. Brandes and D. Wagner (eds), Lecture Notes in Computer Science.
        Springer-Verlag.
      </li>
      <li>
        S.N. Bhatt, G. Bilardi and G. Pucci. (1999). "Area-universal circuits
        with constant slowdown", 20th Annual Conference on Advanced Research in
        VLSI.
      </li>
      <li>
        S.N. Bhatt, A. Konstantinou, S. Rajagopalan, and Y. Yemini. (1999).
        "Managing security in dynamic networks", Proceedings of the 13th Usenix
        LISA Conference.
      </li>
      <li>
        S.N. Bhatt, F. Hao and E. Zegura. (1998). "Performance of the PNNI
        protocol in large networks", Proceedings of the ATM'98 Workshop.
      </li>
      <li>
        S.N. Bhatt, L. Zhang, M. Andrews, W. Aiello and K. Krishnan. (1997). "A
        performance comparison of competitive on-line routing and
        state-dependent routing", Proceedings of the IEEE Globecomm Symposium.
        IEEE.
      </li>
      <li>
        V. Fernadez, N. Zabusky, S.N. Bhatt, P. Liu, and A. Gerasoulis. (1995).
        "Filament surgery and temporal grid adaptivity extensions to a parallel
        tree code for simulation and diagnostics in 3d vortex dynamics", Second
        International Workshop in Vortex Flow.
      </li>
      <li>
        S.N. Bhatt, P. Liu, V. Fernadez, and N. Zabusky. (1995). "Tree codes for
        vortex dynamics", International Parallel Processing Symposium .
      </li>
      <li>
        S.N. Bhatt, P. Liu, V. Fernandez and N. Zabusky. (1995). "Tree codes for
        vortex dynamics: Applications of a programming framework", Santa Barbara
        Workshop on solving irregular problems on parallel machines.
      </li>
      <li>
        S.N. Bhatt and P. Liu. (1995). "A framework for parallel N-body
        simulation", Proceedings of the International Conference on Parallel
        Processing ICCP.
      </li>
      <li>
        S.N. Bhatt, F. Chung, F.T. Leighton, and A.L. Rosenberg. (1994). "On
        Optimal Strategies for Cycle-Stealing in Networks of Workstations",
        Proceedings of the 6th Annual ACM Symposium on Parallel Algorithms and
        Architectures.. ACM.
      </li>
      <li>
        P. Liu and S.N. Bhatt. (1994). "Experiences with parallel N-body
        simulation", Proceedings of the 6th Annual ACM Symposium on Parallel
        Algorithms and Architectures. ACM.
      </li>
      <li>
        S.N. Bhatt, M. Chen, Y. Choo, J. Cowie, P. Liu and S. Pai. (1994).
        "Using object-oriented tools to develop challenging applications",
        Dual-Use Technologies and Applications Conference.
      </li>
      <li>
        S.N. Bhatt, M. Chen, J. Cowie, and C. Y. Lin. (1993). "Object-oriented
        support for adaptive methods on parallel machines", Proceedings of the
        2nd Annual Object Oriented Numerics Conference OON-SKI.
      </li>
      <li>
        P. Liu, S.N. Bhatt and W. Aiello. (1993). "An atomic model for message
        passing", Proceedings of the 5th Annual ACM Symposium on Parallel
        Algorithms and Architectures. ACM.
      </li>
      <li>
        S.N. Bhatt, M. Chen, C.Y. Lin and P. Liu. (1992). "Programming
        large-scale N-body simulations", DARPA Software Technology Conference .
        DARPA.
      </li>
      <li>
        S.N. Bhatt, F. Chung, F.T. Leighton and A.L. Rosenberg. (1992).
        "Tolerating faults in synchronization networks", Conference on Parallel
        Processing: CONPAR 92 � VAPP V. Springer-Verlag.
      </li>
      <li>
        S.N. Bhatt, M. Chen, C. Y. Lin, and Pangfeng Liu. (1992). "Abstractions
        for N-body simulations", Proceedings of the IEEE Scalable High
        Performance Computing Conference. IEEE.
      </li>
      <li>
        S.N. Bhatt, D.S. Greenberg, F.T. Leighton and P. Liu. (1991). "Tight
        bounds for online tree embeddings", Proceedings of the 2nd Annual ACM
        Symposium on Discrete Algorithms. ACM.
      </li>
      <li>
        S.N. Bhatt and D.S. Greenberg. (1990). "Routing multiple paths in
        hypercubes", Proceedings of the 2nd Annual Symposium on Parallel
        Algorithms and Architectures. ACM.
      </li>
      <li>
        S.N. Bhatt and Jin-Yi Cai. (1988). "Take a walk, grow a tree",
        Proceedings of the 29th Annual IEEE Symposium on Foundations of Computer
        Science . IEEE.
      </li>
      <li>
        A.G. Ranade, S.N. Bhatt and S.L. Johnsson. (1988). "The Fluent abstract
        machine", Proceedings of the Fifth MIT VLSI Conference on Advanced
        Research in VLSI. MIT Press.
      </li>
      <li>
        S.N.Bhatt, F.Chung, J.W. Hong, F.T. Leighton and A. Rosenberg. (1988).
        "Optimal simulations by butterfly networks", Proceedings of the 20th ACM
        Symposium on Theory of Computing. ACM.
      </li>
      <li>
        S.N. Bhatt, F. Chung and A. Rosenberg. (1986). "Partitioning circuits
        for improved testability", Proceedings of the Fourth MIT Conference on
        Advanced Research in VLSI. MIT Press.
      </li>
      <li>
        S.N. Bhatt, F. Chung, F.T. Leighton, and A. Rosenberg. (1986). "Optimal
        simulations of tree machines", Proceedings 27th Annual IEEE Symposium on
        Foundations of Computer Science. IEEE.
      </li>
      <li>
        B.S. Baker, S.N. Bhatt and F.T. Leighton. (1984). "An approximation
        algorithm for Manhattan routing", Proceedings of the Sixteenth Annual
        Symposium on Theory of Computing. ACM.
      </li>
      <li>
        S.N. Bhatt and C.E. Leiserson. (1982). "How to assemble tree machines",
        Fourteenth Annual Symposium on Theory of Computing. ACM.
      </li>
    </ol>
    <div className="publicationtitle">Book Chapters</div>
    <ol>
      <li>
        S.N. Bhatt, W. Horne, S. Sundaramurthy and L. Zomlot. (2016). "The role
        of processes in security operations centers",{" "}
        <i>Psychosocial Dynamics of Cyber Security,</i> S. Zaccaro, R. Dalal, L.
        Tetrick and J. Steinke , Routledge Press.
      </li>
    </ol>
    <div className="publicationtitle">Books</div>
    <ol>
      <li>
        Sandeep N. Bhatt, editor. (1997).{" "}
        <i>Parallel Algorithms: Third DIMACS Implementation Challenge,</i> AMS
        DIMACS series.
      </li>
    </ol>
    <div className="publicationtitle">Reports</div>
    <ol>
      <li>
        S.N. Bhatt, P. Manadhata and P. Rao. (2015). "Unearthing Enterprise Data
        Exfiltration Tunnels", Hewlett-Packard Technical Report .
      </li>
      <li>
        S. Bandhakavi, S.N. Bhatt, C. Okita and P. Rao. (2009). "End-to-end
        Network Access Analysis", Hewlett-Packard Technical Report .
      </li>
      <li>
        R. Bergman and S.N. Bhatt. (2008). "A Recursive Hybrid Image
        Segmentation Algorithm", Hewlett-Packard Technical Report .
      </li>
      <li>
        S.N. Bhatt, W. Horne, S. Rajagopalan and P. Rao. (2007). "Managing ACLs
        in a distributed system", Hewlett-Packard Technical Report .
      </li>
      <li>
        S.N. Bhatt and P. Rao. (2007). "Enhancements to the Vantage Firewall
        Analyzer", Hewlett-Packard Technical Report .
      </li>
      <li>
        S.N. Bhatt, W. Horne and P. Rao. (2007). "The Vantage Firewall Analyzer
        Prototype", Hewlett-Packard Technical Report .
      </li>
      <li>
        S.N. Bhatt and I. Ipsen. (1985). "How to embed trees in hypercubes",
        Yale University Research Report DCS/RR- 443.
      </li>
      <li>
        S.N. Bhatt and C.E. Leiserson. (1982). "Minimizing the longest edge in a
        VLSI layout", MIT VLSI Memo . (86).
      </li>
    </ol>
  </>
)

export default Fields
